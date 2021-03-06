package com.bayviewglen.hashBook;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;

public class HashMain {

	static Scanner scanner = new Scanner(System.in);
	static HashAddressBook currentBook;
	static File file = new File("HashAddressBooks/addressBookOne.txt");
	static File file2 = new File("HashAddressBooks/addressBookTwo.txt");
	final static int FIRST_CHOICE = 1;
	final static int SECOND_CHOICE = 2;
	final static int THIRD_CHOICE = 3;
	final static int FOURTH_CHOICE = 4;
	final static int EMPTY = 0;
	final static int EXIT = -1;
	final static int TWO_SECONDS = 2000;
	final static int HALF_SECOND = 500;
	final static int EXIT_SYSTEM = 0;

	public static void main(String[] args) throws IOException{
		startMenu();
	}

	public static void startMenu() throws IOException {
		HashAddressBook bookOne = new HashAddressBook(file);
		HashAddressBook bookTwo = new HashAddressBook(file2);
		System.out.println("Hello, please select an address book, or enter '3' exit the program:");
		System.out.println("(1) Address Book One");
		System.out.println("(2) Address Book Two");
		System.out.println("(3) Exit");
		boolean validOption = false;
		while(!validOption){
			try{
				int option = scanner.nextInt();
				if(option == FIRST_CHOICE){ // Selects addressBookOne.txt as the current book to traverse
					System.out.println("Address Book One selected!");
					currentBook = bookOne;
					run(currentBook);
					validOption = true;
				}else if(option == SECOND_CHOICE){ // Selects addressBookTwo.txt as the current book to traverse
					System.out.println("Address Book Two selected!");
					currentBook = bookTwo;
					run(currentBook);
					validOption = true;
				}else if(option == THIRD_CHOICE){ // Exits the program
					System.out.println("Thanks for using this program! See you later!");
					System.exit(EXIT_SYSTEM);
				}else{
					System.out.println("Please enter a valid number (1 to 3): ");
				}
			}catch(Exception ex){
				System.out.println("Please enter a valid option!");
				scanner.nextLine();
			}
		}
	}
	public static void run(HashAddressBook selectedBook) throws IOException{
		scanner.nextLine();
		boolean validOption2 = false;
		while (!validOption2){
			try{
				System.out.println("\nWhat would you like to do now?");
				System.out.println("(1) Display Contacts");
				System.out.println("(2) Add Contact");
				System.out.println("(3) Search Address Book (then View/Delete Contact)");
				System.out.println("(4) Save and Return to Main Menu");
				int option = scanner.nextInt();
				scanner.nextLine();
				if(option == FIRST_CHOICE){ // Displays the list of the HashContacts in the HashAddressBook
					currentBook.displayContacts();
					delay(TWO_SECONDS);
				}else if(option == SECOND_CHOICE){ // Adds a new HashContact into the HashAddressBook through user input
					System.out.println("Please enter a first name, last name, and phone number: ");
					boolean validOption = false;
					while(!validOption){
						try{
							String input = scanner.nextLine();
							currentBook.addContact(input.split(" ")[0], input.split(" ")[1], input.split(" ")[2]);
							System.out.println("Contact added!");
							validOption = true;
						}catch(Exception ex){
							System.out.println("Please enter a valid option!");
						}
					}
				}else if(option == THIRD_CHOICE){ // Searches the HashAddressBook using a keyword
					ArrayList<HashContact> options = new ArrayList<HashContact>();
					boolean validKeyword = false;
					while(!validKeyword){
						try{
							System.out.println("Please enter a keyword to search, or just press 'enter' to display all contacts: ");
							String keyword = scanner.nextLine();
							if(keyword != ""){
								options = currentBook.searchAddressBook(keyword, options); // Stores all search results
								if(options.size() == EMPTY){
									validKeyword = false;
									if(currentBook.getList().size() == EMPTY){ // If the HashAddressBook is empty, move to the next step
										validKeyword = true;
									}
								}else{
									validKeyword = true;
								}
							}else{
								validKeyword = true;
							}
						}catch(Exception ex){
							System.out.println("Please enter a valid option!");
							scanner.nextLine();
						}
					}
					System.out.println("Please enter the index of the contact you wish to remove, or simply enter '-1' to return to the options:  ");
					boolean validOption = false;
					while(!validOption){ // Removes a HashContact by the input index of the user, or exits back to the options
						try{
							int input = scanner.nextInt();
							if(input == EXIT){
								validOption = true;
							}else if(input<currentBook.getList().size() && input >= EMPTY){
								int counter = EMPTY;
								for(HashContact contact: options){
									try{
										counter++;
										if(contact.equals(currentBook.getList().get(input))){
											currentBook.removeContact(input);
											System.out.println("Contact \"" + contact.getLastName() + ", " + contact.getFirstName() + "\" removed!");
											validOption = true;
											break;
										}if(counter == options.size()){
											System.out.println("Please enter a valid option! (Enter '-1' or an index value): ");
											break;
										}
									}catch(Exception ex){
										System.out.println("Please enter a valid option!");
										scanner.nextLine();
									}
								}
							}else{
								System.out.println("Please enter a valid option! (Enter '-1' to exit or an index value to delete): ");
							}
						}catch(Exception ex){
							System.out.println("Please enter a valid option!");
							scanner.nextLine();
						}
					}
				}else if(option == FOURTH_CHOICE){ // Saves the HashAddressBook and returns to the start menu
					System.out.print("Saving");
					delay(HALF_SECOND);
					System.out.print(".");
					delay(HALF_SECOND);
					System.out.print(".");
					delay(HALF_SECOND);
					System.out.print(".");
					System.out.println("\n");
					currentBook.saveContacts();
					validOption2 = true;
				}else{
					System.out.println("Please select a valid option!");
				}
			}catch(Exception ex){
				System.out.println("Please enter a valid option!");
				scanner.nextLine();
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

