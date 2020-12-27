package com.ericskh02.lihkgclone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.concurrent.atomic.AtomicInteger;

@SpringBootApplication
public class LihkgCloneApplication {

	//This initial value is for testing only and will cause id duplication, do not use in real production
	private static AtomicInteger lastid = new AtomicInteger(0);

	public static int getLastId(){
		return lastid.incrementAndGet();
	}
	public static void main(String[] args) {
		SpringApplication.run(LihkgCloneApplication.class, args);

	}

}
