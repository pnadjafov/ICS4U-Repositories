package com.bayviewglen.contactProject;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		ArrayList<Contact> addressBook = new ArrayList<Contact>();
		
		String firstName1 = "Phillip";
		String lastName1 = "Nadjafov";
		String phone1 = "416-432-9384";
		
		String firstName2 = "La";
		String lastName2 = "Rosh";
		String phone2 = "416-887-9187";
		
		String firstName3 = "Harrison";
		String lastName3 = "Apitz-Grossman";
		String phone3 = "416-432-9384";
		
		String firstName4 = "Phillip";
		String lastName4 = "Nadjafov";
		String phone4 = "416-432-9384";
		
		String firstName5 = "Phillip";
		String lastName5 = "Nadjafov";
		String phone5 = "416-432-9384";
		
		Contact contact1 = new Contact(firstName1, lastName1, phone1);
		
		System.out.println("Hello! ");
	}

}
