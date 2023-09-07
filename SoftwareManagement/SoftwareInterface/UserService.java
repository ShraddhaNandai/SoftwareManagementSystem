package com.example.SoftwareManagement.SoftwareInterface;

import java.util.List;

import com.example.SoftwareManagement.model.User;

public interface UserService {
	public void addUser(User obj);
	public List<User> findBookedUsersBySoftwareId(long softwareId);
}