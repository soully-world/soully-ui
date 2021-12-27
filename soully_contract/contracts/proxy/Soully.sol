// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721URIStorageUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlEnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/StringsUpgradeable.sol";

contract Soully is
    ERC721Upgradeable,
    AccessControlEnumerableUpgradeable,
    ERC721URIStorageUpgradeable,
    ERC721EnumerableUpgradeable,
    ERC721PausableUpgradeable
{
    using CountersUpgradeable for CountersUpgradeable.Counter;
    using StringsUpgradeable for uint256;
    address public factory;
    CountersUpgradeable.Counter private _tokenIdTracker;

    uint256 public price = 50000000000000000; // 0.05
    uint256 public constant maxPurchase = 10;
    uint256 public constant MAX_Soully = 3000;
    string private _baseTokenURI;
    // 0 = paused, 1 = live
    uint256 public saleState = 0;
    mapping(address => uint256) public vipSaleReserved;

    // Rarity
    // 0 <= _tokenIdTrackerSSS < 2  2
    uint256 public constant SSSR = 2;
    uint256 private _tokenIdTrackerSSS;
    // 2 <= _tokenIdTrackerSS < 18   16
    uint256 public constant SSR = 16;
    uint256 private _tokenIdTrackerSS = 2;
    // 18 <= _tokenIdTrackerSS < 82  64
    uint256 public constant SR = 64;
    uint256 private _tokenIdTrackerS = SSSR + SSR;
    // 82 <= _tokenIdTrackerSS < 3000  2918
    uint256 public constant R = 2918;
    uint256 private _tokenIdTrackerA = SSSR + SSR + SR;

    function initialize() external initializer {
        factory = _msgSender();
        __ERC721_init("Soully World ", "SOL");
        vipSaleReserved[msg.sender] = 1;
    }

    function setVipSaleWhitelist(address[] memory _a) public virtual {
        require(msg.sender == factory, "RareGoods721::Unauthorized initialization.");
        for (uint256 i; i < _a.length; i++) {
            vipSaleReserved[_a[i]] = 1;
        }
    }

    function mint(address to, uint256 num) public payable virtual {
        require(saleState > 0, "Sale not live");
        require(num > 0, "Cannot buy 0");
        require(to != address(0x0), "address err");
        require(num <= maxPurchase, "Exceeds max number of Soully in one transaction");
        uint256 reservedAmt = vipSaleReserved[to];
        uint256 _num = num - reservedAmt;
        uint256 _price = reservedAmt > 0 ? _num > 0 ? (price * 1) / 2 + price * _num : (price * 1) / 2 : price * _num;
        require(_price <= msg.value, "Ether value sent is not correct");

        uint256 supply = totalSupply();

        if (reservedAmt > 0) {
            require(supply + 1 <= MAX_Soully, "Purchase would exceed max supply of Soully");
            _mindRandom(to);
            vipSaleReserved[to] = 0;
        }
        if (_num > 0) {
            require(supply + _num <= MAX_Soully, "Purchase would exceed max supply of Soully");
            for (uint256 i; i < _num; i++) {
                _mindRandom(to);
            }
        }
    }

    function _mindRandom(address to) private {
        uint256 _r = _random();
        uint256 _mintId;

        uint256 _SSSR = SSSR;
        uint256 _SSR = SSR;
        uint256 _SR = SR;
        uint256 _R = R;

        if (0 <= _r && _r < _SSSR && _tokenIdTrackerSSS < _SSSR) {
            _mintId = _tokenIdTrackerSSS;
            _tokenIdTrackerSSS += 1;
        } else if (0 <= _r && _r < _SSSR + _SSR && _tokenIdTrackerSS < _SSR) {
            _mintId = _tokenIdTrackerSS;
            _tokenIdTrackerSS += 1;
        } else if (0 <= _r && _r < _SSSR + _SSR + _SR && _tokenIdTrackerS < _SR) {
            _mintId = _tokenIdTrackerS;
            _tokenIdTrackerS += 1;
        } else {
            if (_tokenIdTrackerA >= _R) {
                if (_tokenIdTrackerS >= _SR) {
                    if (_tokenIdTrackerSS >= _SSR) {
                        _mintId = _tokenIdTrackerSSS;
                        _tokenIdTrackerSSS += 1;
                    } else {
                        _mintId = _tokenIdTrackerSS;
                        _tokenIdTrackerSS += 1;
                    }
                } else {
                    _mintId = _tokenIdTrackerS;
                    _tokenIdTrackerS += 1;
                }
            } else {
                _mintId = _tokenIdTrackerA;
                _tokenIdTrackerA += 1;
            }
        }
        _safeMint(to, _mintId);
    }

    function _random() private view returns (uint256) {
        return uint256(keccak256(abi.encodePacked(block.difficulty, block.timestamp, totalSupply()))) % MAX_Soully;
    }

    function setBaseTokenURI(string memory baseTokenURI_) public virtual {
        require(msg.sender == factory, "RareGoods721::Unauthorized initialization.");
        _baseTokenURI = baseTokenURI_;
    }

    function setPrice(uint256 _price) public virtual {
        require(msg.sender == factory, "RareGoods721::Unauthorized initialization.");
        require(_price > 0, "Zero price");
        price = _price;
    }

    function setSaleState(uint256 _saleState) public virtual {
        require(msg.sender == factory, "RareGoods721::Unauthorized initialization.");
        require(saleState >= 0, "Sale state cannot < 0");
        require(saleState < 2, "Sale state cannot > 1");
        saleState = _saleState;
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721Upgradeable, ERC721EnumerableUpgradeable, ERC721PausableUpgradeable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(AccessControlEnumerableUpgradeable, ERC721Upgradeable, ERC721EnumerableUpgradeable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function _burn(uint256 tokenId) internal override(ERC721Upgradeable, ERC721URIStorageUpgradeable) {}

    function tokenURI(uint256 _tokenId)
        public
        view
        override(ERC721Upgradeable, ERC721URIStorageUpgradeable)
        returns (string memory)
    {
        require(_exists(_tokenId), "ERC721Metadata: URI query for nonexistent token");
        return bytes(_baseTokenURI).length > 0 ? string(abi.encodePacked(_baseTokenURI, _tokenId.toString())) : "";
    }

    function transfer(address to, uint256 tokenId) public {
        address from;
        address owner = ERC721Upgradeable.ownerOf(tokenId);
        if (owner == _msgSender()) {
            from = _msgSender();
        } else if (
            ERC721Upgradeable.getApproved(tokenId) == _msgSender() ||
            ERC721Upgradeable.isApprovedForAll(owner, _msgSender())
        ) {
            from = owner;
        } else {
            revert("Soully: Need to be owner or approved to transfer Soully");
        }
        safeTransferFrom(from, to, tokenId);
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

    function withdraw() public payable {
        require(msg.sender == factory, "RareGoods721::Unauthorized initialization.");
        require(payable(msg.sender).send(address(this).balance));
    }
}
