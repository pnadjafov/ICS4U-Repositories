package com.bayviewglen.hashTests;

import static org.junit.Assert.*;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;

import org.junit.Test;

import com.bayviewglen.hashBook.HashAddressBook;
import com.bayviewglen.hashBook.HashContact;

public class hashAddressBookTests{

	@Test
	public void addContactByString() throws IOException {
		File file = new File("HashAddressBooks/TestAddressBook.txt");
		HashAddressBook book = new HashAddressBook(file);
		
		book.addContact("Joe", "Bob", "416-152-1564");
		
		ArrayList<HashContact> list = new ArrayList<HashContact>();
		list = book.getList();
		assertEquals("HashAddressBook, Add Contact Test:", true, book.isValidContact(list.size()-1));
	}
	
	@Test
	public void addContactByClass() throws IOException {
		File file = new File("HashAddressBooks/TestAddressBook.txt");
		HashAddressBook book = new HashAddressBook(file);
		
		HashContact contact = new HashContact("Joe", "Bob", "416-643-6823");
		book.addContact(contact);
		
		ArrayList<HashContact> list = new ArrayList<HashContact>();
		list = book.getList();
		
		assertEquals("HashAddressBook, Add Contact Test:", true, contact.equals(list.get(list.size()-1)));
	}
	
	@Test
	public void removeContact() throws IOException{
		File file = new File("HashAddressBooks/TestAddressBook.txt");
		HashAddressBook book = new HashAddressBook(file);
		
		book.addContact("Joe", "Bob", "416-152-1564");
		ArrayList<HashContact> list = new ArrayList<HashContact>();
		list = book.getList();
		
		book.removeContact(list.size()-1);
		ArrayList<HashContact> list2 = new ArrayList<HashContact>();
		list2 = book.getList();
		
		assertEquals("HashAddressBook, Remove Contact Test:", true, list.size() == list2.size()+1);
	}
	
	@Test
	public void getName() throws IOException{
		File file = new File("HashAddressBooks/TestAddressBook.txt");
		HashAddressBook book = new HashAddressBook(file);
		
		String name = book.getName();
		
		assertEquals("HashAddressBook, Get Book Name Test:", "TestAddressBook", name);
	}
	
	@Test
	public void search() throws IOException{
		File file = new File("HashAddressBooks/TestAddressBook.txt");
		HashAddressBook book = new HashAddressBook(file);
		
		ArrayList<HashContact> searchResults = new ArrayList<HashContact>();
		
		book.addContact("Joe", "Bob", "416-152-1564");
		
		book.searchAddressBook("Joe", searchResults);
		
		assertEquals("HashAddressBook, Search Test:", true, searchResults.size() >= 1);
	}
	
	@Test
	public void validContact() throws IOException{
		File file = new File("HashAddressBooks/TestAddressBook.txt");
		HashAddressBook book = new HashAddressBook(file);
		
		book.addContact("Joe", "Bob", "416-152-1564");
		
		ArrayList<HashContact> list = book.getList();
		
		assertEquals("HashAddressBook, Valid Contact Test", true, book.isValidContact(list.size()-1));
	}
	
	/*public void removeTestContacts() throws IOException{
		File file = new File("HashAddressBooks/TestAddressBook.txt");
		HashAddressBook book = new HashAddressBook(file);
		HashContact contact = new HashContact("Joe", "Bob", "416-152-1564");
		
		ArrayList<HashContact> list = new ArrayList<HashContact>();
		
		for(int i = 0; i<list.size(); i++){
			if(list.get(i).equals(contact)){
				book.removeContact(i);
			}
		}
	}*/
	
	@Test
	public void checkContactVariables() throws IOException{
		HashContact contact = new HashContact("Joe", "Bob", "416-152-1564");
		
		assertEquals("HashContact, Check Variables Test:", true, contact.getFirstName() == "Joe" && contact.getLastName() == "Bob" && contact.getPhone() == "416-152-1564");
	}
	
	@Test
	public void changeContactVariables() throws IOException{
		HashContact contact = new HashContact("Joe", "Bob", "416-152-1564");
		
		contact.changeFirstName("Bob");
		contact.changeLastName("Joe");
		contact.changePhone("647-824-9123");
		
		assertEquals("HashAddressBook, Get Name Test:", true, contact.getFirstName() == "Bob" && contact.getLastName() == "Joe" && contact.getPhone() == "647-824-9123");
	}
	
	
}
