// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Soully is ERC721Enumerable, Ownable {
    using Strings for uint256;
    using Counters for Counters.Counter;

    uint256 public price = 70000000000000000; // 0.07
    uint256 public constant maxPurchase = 20;
    uint256 public constant MAX_Soully = 10000;
    uint256 private constant MAX_Vip_Mint = 10;
    string private _baseTokenURI;

    // 0 = paused, 1 = vip, 2 = live
    uint256 public saleState = 0;
    mapping(address => uint256) public vipSaleReserved;

    Counters.Counter private _tokenIdTracker;
    mapping(uint256 => uint256) public tokenIdKeyMap;
    mapping(uint256 => uint256) public tokenRomdomKeyMap;

    constructor(string memory baseTokenURI) ERC721("Soully World", "Soully") {
        _baseTokenURI = baseTokenURI;
        vipSaleReserved[msg.sender] = MAX_Vip_Mint;
    }

    function setVipSaleWhitelist(address[] memory _a) public virtual onlyOwner {
        for (uint256 i; i < _a.length; i++) {
            vipSaleReserved[_a[i]] = MAX_Vip_Mint;
        }
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
        for (uint256 i; i < num; i++) {
            uint256 R = _random(__random());
            tokenIdKeyMap[_tokenIdTracker.current()] = R;
            tokenRomdomKeyMap[R] = _tokenIdTracker.current();
            _tokenIdTracker.increment();
            _mint(msg.sender, R);
        }
    }

    function mint(address to, uint256 num) public payable virtual {
        require(to != address(0x0), "Soully:: address err");
        uint256 supply = totalSupply();
        require(saleState > 1, "Soully:: Sale not live");
        require(num > 0, "Soully:: Cannot buy 0");
        require(num <= maxPurchase, "Soully:: Exceeds max number of Soully World in one transaction");
        require(supply + num < MAX_Soully, "Soully:: Purchase would exceed max supply of Soully World");
        require(price * num <= msg.value, "Soully:: Ether value sent is not correct");

        for (uint256 i; i < num; i++) {
            uint256 R = _random(__random());
            tokenIdKeyMap[_tokenIdTracker.current()] = R;
            tokenRomdomKeyMap[R] = _tokenIdTracker.current();
            _tokenIdTracker.increment();
            _mint(to, R);
        }
    }

    function _random(uint256 _r) private view returns (uint256) {
        if (_exists(tokenRomdomKeyMap[_r])) {
            _random(_r + 1);
        }
        return _r;
    }

    function __random() private view returns (uint256) {
        return
            uint256(keccak256(abi.encodePacked(block.difficulty, block.timestamp, _tokenIdTracker.current()))) %
            MAX_Soully;
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
        return string(abi.encodePacked(_baseTokenURI, _tokenId.toString()));
    }

    function uint2str(uint256 _i) internal pure returns (string memory _uintAsString) {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint256 k = len;
        while (_i != 0) {
            k = k - 1;
            uint8 temp = (48 + uint8(_i - (_i / 10) * 10));
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            _i /= 10;
        }
        return string(bstr);
    }
}
