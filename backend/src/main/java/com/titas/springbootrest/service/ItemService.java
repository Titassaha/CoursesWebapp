package com.titas.springbootrest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.titas.springbootrest.entity.Item;
import com.titas.springbootrest.repo.ItemRepository;

@Service
public class ItemService {
	@Autowired
	private ItemRepository itemRepository;
	
	public Item deleteByName(String name) {
		Item item = itemRepository.findByName(name);
		itemRepository.deleteById(item.getId());
		return item;
	}
	
}
