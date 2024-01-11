// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BoxV2 {
 
 uint public val;

//  constructor(uint val) {
//     value = val;
//  }

 function init(uint initialValue) public {
    val = initialValue;
}

 function add () public {
    val += 1;
}

}