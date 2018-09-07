package com.idexx.assignmentservice.controller;


import com.google.gson.Gson;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ApiController {
    private static final Gson gson = new Gson();

    @RequestMapping(method = RequestMethod.GET, value = "getResults", params = {"input"})
    public ResponseEntity<String> getResults(@RequestParam("input") String input) {
        return ResponseEntity.ok(gson.toJson(input));
    }

}
