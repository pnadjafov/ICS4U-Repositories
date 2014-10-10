package com.bayviewglen.hashBook;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

public class HashAddressBook{
	private HashMap<Integer, HashContact> list;
	private String listName;
	private PrintWriter writer;
	private Scanner scanner;
	private String path;

	public HashAddressBook(File file) throws IOException{ // Constructs a new HashAddressBook using a file as its input location.
		list = new HashMap<Integer, HashContact>();
		File f = file;
		scanner = new Scanner(f);
		path = "HashAddressBooks\\" + file.getName();
		listName = file.getName().substring(0, file.getName().length()-4); 
		loadContacts();
	}

	public String getName(){ // Gets the name of the HashAddressBook
		return listName;
	}
	
	public ArrayList<HashContact> getList(){ // Obtains an ArrayList with all the HashContacts from the HashAddressBook
		ArrayList<HashContact> temp = new ArrayList<HashContact>();
		for(HashContact contact: list.values()){
			temp.add(contact);
		}
		return temp;
	}

	public void addContact(String firstName, String lastName, String phone) throws FileNotFoundException{ // Adds a HashContact to the HashAddressBook using String inputs
		list.put(list.size(), new HashContact(firstName, lastName, phone));
		saveContacts();
	}
	
	public void addContact(HashContact contact){ // Adds a HashContact to the HashAddressBook using a HashContact as the input
		list.put(list.size(), contact);
	}
	
	public void removeContact(int input) throws FileNotFoundException{ // Removes a HashContact from the HashAddressBook, and then saves the file the HashAddressBook is in
		list.remove(input);
		saveContacts();
	}

	public void saveContacts() throws FileNotFoundException{ // Saves the HashAddressBook
		writer = new PrintWriter(path);
		writer.println(list.size());
		for(HashContact contact: list.values()){
			writer.println(contact.getFirstName() + " " + contact.getLastName() + " " + contact.getPhone());
		}
		writer.close();
	}

	public void loadContacts(){ // Loads the HashAddressBook
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
			list.put(list.size(), new HashContact(firstName, lastName, phoneNumber));
		}
	}

	public void displayContacts(){ // Prints out a list of all the HashContacts in the HashAddressBook
		for(HashContact contact: list.values()){
			System.out.println(contact.displayContact());
		}
	}

	public ArrayList<HashContact> searchAddressBook(String search, ArrayList<HashContact> options) throws FileNotFoundException{ // Searches the HashAddressBook using a String keyword as the input, and returns an ArrayList of HashContacts filled with search results
		int printCount = 0;
		for(HashContact contact: list.values()){
			if(contact.getFirstName().toLowerCase().contains(search.toLowerCase())){
				System.out.println("(" + getList().indexOf(contact)+  "): " + contact.displayContact());
				printCount++;
				options.add(contact);
			}else if(contact.getLastName().toLowerCase().contains(search.toLowerCase())){
				System.out.println("(" + getList().indexOf(contact)  +  "): " + contact.displayContact());
				printCount++;
				options.add(contact);
			}else if(contact.getPhone().contains(search.toLowerCase())){
				System.out.println("(" + getList().indexOf(contact) +  "): " + contact.displayContact());
				printCount++;
				options.add(contact);
			}
		}
		if(printCount == 0){
			System.out.println("No contacts found with that query.");
		}
		return options;
	}

	public boolean isValidContact(int input){ // Checks if a HashContact is in a valid location of the HashAddressBook in terms of its index
		for(int i = 0; i<list.size(); i++){
			if(list.get(i).equals(list.get(input))){
				return true;
			}
		}
		return false;
	}
}
