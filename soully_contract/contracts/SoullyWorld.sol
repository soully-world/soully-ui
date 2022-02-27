// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./utils/ERC721A.sol";

contract SoullyWorld is Ownable, ERC721A {
    uint256 public price = 60000000000000000; // 0.06
    uint256 public immutable MAX_Soully;
    uint256 public immutable maxPurchase;
    uint256 private constant MAX_Vip_Mint = 5;
    string private _baseTokenURI;
    uint256 private _reserved = 5;

    // 0 = paused, 1 = vip, 2 = live
    uint256 public saleState = 0;
    mapping(address => uint256) public vipSaleReserved;

    event Minted(address minter, uint256 amount);
    event ReservedToken(address from, address to, uint256 num);

    /**
     * @dev
     * `maxBatchSize` refers to how much a minter can mint at a time.
     * `collectionSize_` refers to how many tokens are in the collection.
     */
    constructor(
        uint256 _maxBatchSize,
        uint256 _maxSupply,
        string memory baseTokenURI
    ) ERC721A("Soully World", "Soully", _maxBatchSize, _maxSupply) {
        _baseTokenURI = baseTokenURI;
        vipSaleReserved[msg.sender] = MAX_Vip_Mint;
        MAX_Soully = _maxSupply;
        maxPurchase = _maxBatchSize;
    }

    function setVipSaleWhitelist(address[] memory _a) public virtual onlyOwner {
        for (uint256 i; i < _a.length; i++) {
            vipSaleReserved[_a[i]] = MAX_Vip_Mint;
        }
    }

    function deleteMapByKey(address key) public {
        delete vipSaleReserved[key];
    }

    function preSaleMint(uint256 num) public payable {
        uint256 supply = totalSupply();
        uint256 reservedAmt = vipSaleReserved[msg.sender];
        require(saleState > 0, "Soully:: Presale isn't active");
        require(reservedAmt > 0, "Soully:: No tokens reserved for address");
        require(num <= reservedAmt, "Soully:: Can't mint more than reserved");
        require(supply + num <= MAX_Soully, "Soully:: Exceeds maximum Soully World supply");
        require(msg.value >= price * num, "Soully:: Ether sent is not correct");
        vipSaleReserved[msg.sender] = reservedAmt - num;

        _safeMint(msg.sender, num);
        emit Minted(msg.sender, num);
    }

    function mint(address to, uint256 num) public payable virtual {
        require(to != address(0x0), "Soully:: address err");
        require(saleState > 1, "Soully:: Sale not live");
        require(num > 0, "Soully:: Cannot buy 0");
        require(num <= maxPurchase, "Soully:: Exceeds max number of Soully World in one transaction");
        uint256 supply = totalSupply();
        require(supply + num < MAX_Soully, "Soully:: Purchase would exceed max supply of Soully World");
        require(price * num <= msg.value, "Soully:: Ether value sent is not correct");

        _safeMint(to, num);

        emit Minted(to, num);
    }

    function reserveSoully(address to, uint256 num) external onlyOwner {
        require(to != address(0), "Soully: Zero address");
        require(num > 0, "Soully: Invalid amount");
        require(num <= _reserved, "Soully: Exceeds reserved Soully supply");
        uint256 supply = totalSupply();
        require(supply + num < MAX_Soully, "Soully:: Purchase would exceed max supply of Soully World");

        uint256 multiple = num / maxBatchSize;
        for (uint256 i = 0; i < multiple; i++) {
            _safeMint(to, maxBatchSize);
        }
        uint256 remainder = num % maxBatchSize;
        if (remainder != 0) {
            _safeMint(to, remainder);
        }
        emit ReservedToken(msg.sender, to, num);
    }

    function setSaleState(uint256 _saleState) public virtual onlyOwner {
        require(saleState >= 0, "Soully:: Sale state cannot < 0");
        require(saleState < 2, "Soully:: Sale state cannot > 1");
        saleState = _saleState;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    function setBaseTokenURI(string memory baseTokenURI_) public virtual onlyOwner {
        _baseTokenURI = baseTokenURI_;
    }

    function setPrice(uint256 _price) public virtual onlyOwner {
        require(_price > 0, "Soully:: Zero price");
        price = _price;
    }

    function withdraw() public payable onlyOwner {
        require(payable(msg.sender).send(address(this).balance));
    }

    function getOwnershipData(uint256 _tokenId) external view returns (TokenOwnership memory) {
        return ownershipOf(_tokenId);
    }

    function setOwnersExplicit(uint256 quantity) external onlyOwner {
        _setOwnersExplicit(quantity);
    }

    function walletOfOwner(address _owner) public view returns (uint256[] memory) {
        uint256 tokenCount = balanceOf(_owner);

        uint256[] memory tokensId = new uint256[](tokenCount);
        for (uint256 i; i < tokenCount; i++) {
            tokensId[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokensId;
    }

    function getMyAssets(address _owner, uint256 index) public view returns (uint256) {
        uint256 tokensId = tokenOfOwnerByIndex(_owner, index);
        return tokensId;
    }

    function tokenURI(uint256 _tokenId) public view virtual override returns (string memory) {
        require(_exists(_tokenId), "Soully:: token is not mint");
        string memory uri = super.tokenURI(_tokenId);
        return bytes(uri).length > 0 ? uri : "";
    }
}
