package com.bayviewglen.contactProject;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;

public class Main {

	static Scanner scanner = new Scanner(System.in);
	static AddressBook currentBook;
	static File file = new File("AddressBooks/addressBookOne.txt");
	static File file2 = new File("AddressBooks/addressBookTwo.txt");

	public static void main(String[] args) throws IOException{
		startMenu();
	}

	public static void startMenu() throws IOException {
		AddressBook bookOne = new AddressBook(file);
		AddressBook bookTwo = new AddressBook(file2);
		System.out.println("Hello, please select an address book, or enter '3' exit the program:");
		System.out.println("(1) Address Book One");
		System.out.println("(2) Address Book Two");
		System.out.println("(3) Exit");
		boolean validOption = false;
		while(validOption == false){
			int option = scanner.nextInt();
			if(option == 1){
				System.out.println("Address Book One selected!");
				currentBook = bookOne;
				run(currentBook);
				validOption = true;
			}else if(option == 2){
				System.out.println("Address Book Two selected!");
				currentBook = bookTwo;
				run(currentBook);
				validOption = true;
			}else if(option == 3){
				System.out.println("Thanks for using this program! See you later!");
				System.exit(0);
			}else{
				System.out.println("Please enter a valid number (1 to 3): ");
			}
		}
	}
	public static void run(AddressBook selectedBook) throws IOException{
		scanner.nextLine();
		boolean validOption2 = false;
		while (!validOption2){
			System.out.println("\nWhat would you like to do now?");
			System.out.println("(1) Display Contacts");
			System.out.println("(2) Add Contact");
			System.out.println("(3) Search Address Book (then View/Delete Contact)");
			System.out.println("(4) Save and Return to Main Menu");
			int option = scanner.nextInt();
			scanner.nextLine();
			if(option == 1){
				currentBook.displayContacts();
				delay(2000);
			}else if(option == 2){
				System.out.println("Please enter a first name, last name, and phone number: ");
				String input = scanner.nextLine();
				currentBook.addContact(input.split(" ")[0], input.split(" ")[1], input.split(" ")[2]);
				System.out.println("Contact added!");
			}else if(option == 3){
				ArrayList<Contact> options = new ArrayList<Contact>();
				System.out.println("Please enter a keyword to search: ");
				String keyword = scanner.nextLine();
				if(keyword != ""){
					options = currentBook.searchAddressBook(keyword, options);
				}
				System.out.println("Please enter the index of the contact you wish to remove, or simply enter '-1' to return to the options:  ");
				boolean validOption = false;
				while(!validOption){
					int input = scanner.nextInt();
					if(input == -1){
						validOption = true;
					}else if(input<currentBook.getList().size() && input >= 0){
						int counter = 0;
						for(Contact contact: options){
							counter++;
							if(contact.equals(currentBook.getList().get(input))){
								currentBook.removeContact(contact);
								System.out.println("Contact \"" + contact.getLastName() + ", " + contact.getLastName() + "\" removed!");
								validOption = true;
							}if(counter == options.size()){
								System.out.println("Please enter a valid option! (Enter '-1' or an index value): ");
								break;
							}
						}
					}else{
						System.out.println("Please enter a valid option! (Enter 'Exit' or an index value): ");
					}
				}
			}else if(option == 4){
				System.out.print("Saving");
				delay(500);
				System.out.print(".");
				delay(500);
				System.out.print(".");
				delay(500);
				System.out.print(".");
				System.out.println("\n");
				currentBook.saveContacts();
				validOption2 = true;
			}else{
				System.out.println("Please select a valid option!");
			}
		}
		startMenu();
	}

	public static void delay(int time){
		try {
			Thread.sleep(time);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

}

