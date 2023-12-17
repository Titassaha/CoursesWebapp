package com.titas.springbootrest.exceptions;

import org.springframework.web.bind.annotation.ControllerAdvice;


public class ItemNotFoundException extends RuntimeException{

	private Long id;
	public ItemNotFoundException(Long id) {
		super("Could not found item "+id);
	}

}
