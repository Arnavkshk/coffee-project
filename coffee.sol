// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CoffeeShop {
    address public owner;
    uint256 public totalItems;
    mapping(uint256 => Item) public items;
    mapping(address => Cart) public carts;

    struct Item {
        uint256 id;
        string name;
        uint256 price;
    }

    struct Cart {

        mapping(uint256 => uint256) itemQuantities;
        uint256 itemCount;
    }

    event ItemAddedToCart(address indexed user, uint256 itemId, uint256 quantity);
    event PaymentProcessed(address indexed user, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    function addItem(uint256 _id, string memory _name, uint256 _price) public onlyOwner {
        items[totalItems] = Item(_id, _name, _price);
        totalItems++;
    }

    function addToCart(uint256 _itemId, uint256 _quantity) public {
        require(_itemId < totalItems, "Item not found");
        require(_quantity > 0, "Quantity must be greater than 0");
        carts[msg.sender].itemQuantities[_itemId] += _quantity;
        carts[msg.sender].itemCount++;
        emit ItemAddedToCart(msg.sender, _itemId, _quantity);
    }

    function checkout() public payable {
        require(carts[msg.sender].itemCount > 0, "Your cart is empty");
        uint256 totalAmount = calculateTotalAmount(msg.sender);
        require(msg.value >= totalAmount, "Insufficient payment");

        // Process the payment (for demonstration, just transferring the Ether to the owner)
        payable(owner).transfer(msg.value);
        emit PaymentProcessed(msg.sender, msg.value);

        // Clear the cart
        delete carts[msg.sender];
    }

    function calculateTotalAmount(address _user) internal view returns (uint256) {
        uint256 totalAmount;
        for (uint256 i = 0; i < totalItems; i++) {
            totalAmount += items[i].price * carts[_user].itemQuantities[i];
        }
        return totalAmount;
    }
}

contract LoginSystem {
    struct User {
        string username;
        string password;
    }

    mapping(address => User) public users;
    mapping(string => address) private usernameToAddress;

    event UserRegistered(address indexed userAddress, string username);
    event UserLoggedIn(address indexed userAddress, string username);

    function registerUser(string memory _username, string memory _password) public {
        require(usernameToAddress[_username] == address(0), "Username already taken");

        address userAddress = msg.sender;
        users[userAddress] = User(_username, _password);
        usernameToAddress[_username] = userAddress;

        emit UserRegistered(userAddress, _username);
    }

    function loginUser(string memory _username, string memory _password) public view returns (bool) {
        address userAddress = usernameToAddress[_username];
        if (userAddress == address(0)) {
            return false; 
        }

        User memory user = users[userAddress];
        return keccak256(bytes(user.password)) == keccak256(bytes(_password));
    }
}

contract WebStore {
    address public owner;
    uint256 public productPrice;
    mapping(address => uint256) public balances;

    event PaymentReceived(address indexed payer, uint256 amount);

    constructor(uint256 _initialProductPrice) {
        owner = msg.sender;
        productPrice = _initialProductPrice;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    function setProductPrice(uint256 _newPrice) public onlyOwner {
        productPrice = _newPrice;
    }

    function purchaseProduct() public payable {
        require(msg.value >= productPrice, "Insufficient payment");
        balances[msg.sender] += msg.value;
        emit PaymentReceived(msg.sender, msg.value);
    }

    function withdrawFunds() public onlyOwner {
        payable(owner).transfer(address(this).balance);
    }
}
