package com.idexx.assignmentservice.controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TestController {

    @RequestMapping(method = RequestMethod.GET, value = "/hello", params = {"name"})
    public String index(@RequestParam("name") String name) {
        return "Hello world from " + name;
    }
}
