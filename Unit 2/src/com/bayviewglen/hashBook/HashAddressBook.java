package com.bayviewglen.hashBook;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

import com.sun.javafx.collections.MappingChange.Map;

public class HashAddressBook{
	private HashMap<Integer, HashContact> list;
	private String listName;
	private PrintWriter writer;
	private Scanner scanner;
	private String path;

	public HashAddressBook(File file) throws IOException{
		list = new HashMap<Integer, HashContact>();
		File f = file;
		scanner = new Scanner(f);
		path = "HashAddressBooks\\" + file.getName();
		listName = file.getName().substring(0, file.getName().length()-4); 
		loadContacts();
	}

	public String getName(){
		return listName;
	}
	
	public ArrayList<HashContact> getList(){
		ArrayList<HashContact> temp = new ArrayList<HashContact>();
		for(HashContact contact: list.values()){
			temp.add(contact);
		}
		return temp;
	}

	public void addContact(String firstName, String lastName, String phone) throws FileNotFoundException{
		list.put(list.size(), new HashContact(firstName, lastName, phone));
		saveContacts();
	}
	
	public void addContact(HashContact contact){
		list.put(list.size(), contact);
	}
	
	public void removeContact(int input) throws FileNotFoundException{
		list.remove(input);
		saveContacts();
	}

	public void saveContacts() throws FileNotFoundException{
		writer = new PrintWriter(path);
		writer.println(list.size());
		for(HashContact contact: list.values()){
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
			list.put(list.size(), new HashContact(firstName, lastName, phoneNumber));
		}
	}

	public void displayContacts(){
		for(HashContact contact: list.values()){
			System.out.println(contact.getLastName() + ", " + contact.getFirstName() + " : " + contact.getPhone());
		}
	}

	public ArrayList<HashContact> searchAddressBook(String search, ArrayList<HashContact> options) throws FileNotFoundException{
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

	public boolean isValidContact(int input){
		for(int i = 0; i<list.size(); i++){
			if(list.get(i).equals(list.get(input))){
				return true;
			}
		}
		return false;
	}
}
