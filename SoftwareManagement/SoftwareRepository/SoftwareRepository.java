package com.example.SoftwareManagement.SoftwareRepository;




import java.util.List;

import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.SoftwareManagement.model.Developer;
import com.example.SoftwareManagement.model.Software;



/**
 * The SoftwareRepository interface is a Spring Data JPA repository that provides
 * database access and CRUD operations for the Software entity.
 */

@Repository
public interface SoftwareRepository extends JpaRepository<Software, Integer> {
	
	List< Software> findBySoftwareNameContainingIgnoreCase(String softwareName);

	List<Software> findByIsDesktopApplication(boolean status);

//	List<Software> findByDeveloperContainingIgnoreCase(String developerName);

	List<Software> findByDeveloperId(Long developerId);

	Iterable<Order> findByDeveloper_DeveloperNameIgnoreCase(String developerName);

//	List<Software> findByDeveloperDeveloperNameContainingIgnoreCase(String developerName);

//    List<Software> findByDeveloper_DeveloperNameContainingIgnoreCase(String developerName);

}

