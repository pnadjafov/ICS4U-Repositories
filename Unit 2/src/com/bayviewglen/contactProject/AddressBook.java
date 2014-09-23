package com.bayviewglen.contactProject;

import java.util.ArrayList;
import java.util.Scanner;

public class AddressBook {
	private ArrayList <Contact> list;

	Scanner scanner = new Scanner(System.in);

	public AddressBook(ArrayList<Contact> importList){
		for(Contact line: importList){
			list.add(line);
		}
	}

	public void addContact(Contact contact){
		list.add(contact);
	}

	public void displayContacts(){
		for(Contact line: list){
			System.out.println(line.toString());
		}
	}

	public void searchAddressBook(String search){
		int printCount = 0;
		for(Contact line: list){
			if(line.toString().contains(search)){
				System.out.println(line.toString());
				printCount++;
			}
		}
		if(printCount == 0){
			System.out.println("No contacts found.");
		}
	}

	public void searchAndDelete(String search){
		int printCount = 0;
		for(int i = 0; i<list.size(); i++){
			if(list.get(i).toString().contains(search)){
				System.out.println(list.get(i).toString() + "At index: " + list.get(i));
				printCount++;
			}
		}

		if(printCount > 0){
			System.out.println("Which contact would you like to delete? (Pick by index):");
			int input = scanner.nextInt();
			try{
				if(isValidContact(input)){
					list.remove(input);
				}
			}catch(Exception ex){
				System.out.println("That is not a valid contact.");
			}
		}

		if(printCount == 0){
			System.out.println("No contacts found.");
		}
	}

	public boolean isValidContact(int input){
		for(int i = 0; i<list.size(); i++){
			if(list.get(i).equals(list.get(input))){
				return true;
			}
		}
		return false;
	}
}
