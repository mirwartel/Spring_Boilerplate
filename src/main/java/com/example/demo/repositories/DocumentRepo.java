package com.example.demo.repositories;

import com.example.demo.entities.Document;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface DocumentRepo extends CrudRepository<Document, Integer> {
    public List<Document> findAllByFolder(int id);
}
