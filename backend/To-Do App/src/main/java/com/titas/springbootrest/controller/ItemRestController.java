package com.titas.springbootrest.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.titas.springbootrest.entity.Item;
import com.titas.springbootrest.exceptions.ItemNotFoundException;
import com.titas.springbootrest.repo.ItemRepository;
import com.titas.springbootrest.service.ItemService;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ItemRestController {
	
	@Autowired
	private ItemRepository itemRepository;
	@Autowired
	private ItemService itemService;
	
	@PostMapping("/items")
	public Item createNew(@Valid @RequestBody Item newItem) {
		return itemRepository.save(newItem);
	}
	
	@GetMapping("/items")
	public List<Item> all(){
		return itemRepository.findAll();
	}
	
	@GetMapping("/items/{id}")
	public Item getById(@PathVariable Long id) {
		return itemRepository.findById(id).orElseThrow(()-> new ItemNotFoundException(id));
	}
	
	@DeleteMapping("/items/{id}")
	public void delete(@PathVariable Long id){
		itemRepository.deleteById(id);
	}
	
	@DeleteMapping("/items/name/{name}")
	public Item delete(@PathVariable String name){
		Item item = itemService.deleteByName(name);
		System.out.println(item);
		return item;
	}
	
	@PutMapping("/items/{id}")
	public Item updateOrCreate(@RequestBody Item newItem, @PathVariable Long id) {
		return itemRepository.findById(id).map(item -> {
			item.setName(newItem.getName());
			item.setDescription(newItem.getDescription());
			return itemRepository.save(item);
		})
				.orElseGet(()-> {
					newItem.setId(id);
					return itemRepository.save(newItem);
				});
	}

}
