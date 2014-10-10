package com.bayviewglen.hashBook;

public class HashContact { 
	private String firstName;
	private String lastName;
	private String phone;
	
	public HashContact(String fName, String lName, String phoneNum){ // Constructs a new HashContact
		firstName = fName;
		lastName = lName;
		phone = phoneNum;
	}
	
	public String getFirstName(){ // Obtains the first name of the HashContact
		return firstName;
	}
	
	public void changeFirstName(String input){ // Changes the first name of the HashContact
		firstName = input;
	}
	
	public String getLastName(){ // Obtains the last name of the HashContact
		return lastName;
	}
	
	public void changeLastName(String input){ // Changes the last name of the HashContact
		lastName = input;
	}
	public String getPhone(){ // Obtains the phone number of the HashContact
		return phone;
	}
	
	public void changePhone(String input){ // Changes the phone number of the HashContact
		phone = input;
	}
	
	public String displayContact(){ // Obtains the contact in terms of "First Name - Last Name - Phone Number"
		return firstName + " " + lastName + ": " + phone;
	}
}
