package com.bayviewglen.contactProject;

public class Contact {
	private String firstName;
	private String lastName;
	private String phone;
	
	public Contact(String fName, String lName, String phoneNum){
		firstName = fName;
		lastName = lName;
		phone = phoneNum;
	}
	
	public String getFirstName(){
		return firstName;
	}
	
	public void changeFirstName(String input){
		firstName = input;
	}
	
	public String getLastName(){
		return lastName;
	}
	
	public void changeLastName(String input){
		lastName = input;
	}
	public String getPhone(){
		return phone;
	}
	
	public void changePhone(String input){
		phone = input;
	}
	
	public String displayContact(){
		return lastName + ", " + firstName + " " + phone;
	}
}
