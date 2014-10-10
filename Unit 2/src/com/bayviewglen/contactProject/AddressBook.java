package com.bayviewglen.contactProject;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Scanner;

public class AddressBook{
	private ArrayList<Contact> list;
	private String listName;
	private PrintWriter writer;
	private Scanner scanner;
	private String path;

	public AddressBook(File file) throws IOException{
		list = new ArrayList<Contact>();
		File f = file;
		scanner = new Scanner(f);
		path = "AddressBooks\\" + file.getName();
		listName = file.getName().substring(0, file.getName().length()-4); 
		loadContacts();
	}

	public String getName(){
		return listName;
	}
	
	public ArrayList<Contact> getList(){
		return list;
	}

	public void addContact(String firstName, String lastName, String phone) throws FileNotFoundException{
		list.add(new Contact(firstName, lastName, phone));
		saveContacts();
	}
	
	public void addContact(Contact contact){
		list.add(contact);
	}
	
	public void removeContact(Contact contact) throws FileNotFoundException{
		list.remove(contact);
		saveContacts();
	}

	public void saveContacts() throws FileNotFoundException{
		writer = new PrintWriter(path);
		writer.println(list.size());
		for(Contact contact: list){
			writer.println(contact.getFirstName() + " " + contact.getLastName() + " " + contact.getPhone());
		}
		writer.close();
	}

	public void loadContacts(){
		int numLoop = scanner.nextInt();
		if(numLoop > 0){
			scanner.nextLine();
		}
		String temp;
		String firstName, lastName, phoneNumber;
		for(int i=0; i<numLoop; i++){
			temp = scanner.nextLine();
			firstName = temp.split(" ")[0];
			lastName = temp.split(" ")[1];
			phoneNumber = temp.split(" ")[2];
			list.add(new Contact(firstName, lastName, phoneNumber));
		}
	}

	public void displayContacts(){
		for(Contact contact: list){
			System.out.println(contact.displayContact());
		}
	}

	public ArrayList<Contact> searchAddressBook(String search, ArrayList<Contact> options) throws FileNotFoundException{
		int printCount = 0;
		for(Contact contact: list){
			if(contact.getFirstName().toLowerCase().contains(search.toLowerCase())){
				System.out.println("(" + list.indexOf(contact) +  "): " + contact.displayContact());
				printCount++;
				options.add(contact);
			}else if(contact.getLastName().toLowerCase().contains(search.toLowerCase())){
				System.out.println("(" + list.indexOf(contact) +  "): " + contact.displayContact());
				printCount++;
				options.add(contact);
			}else if(contact.getPhone().contains(search.toLowerCase())){
				System.out.println("(" + list.indexOf(contact) +  "): " + contact.displayContact());
				printCount++;
				options.add(contact);
			}
		}
		if(printCount == 0){
			System.out.println("No contacts found with that query.");
		}
		return options;
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
