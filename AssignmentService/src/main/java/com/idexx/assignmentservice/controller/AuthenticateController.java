package com.idexx.assignmentservice.controller;

import com.idexx.assignmentservice.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/authenticate")
public class AuthenticateController {

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity authenticate(@RequestBody User user) {
        User returnedUser = new User();
        returnedUser.setFirstName("Mr.");
        returnedUser.setLastName("Dog");
        returnedUser.setId(1);
        returnedUser.setPassword(user.getPassword());
        returnedUser.setUserName(user.getUserName());
        returnedUser.setToken("fake token");
        return ResponseEntity.ok().body(returnedUser);
    }

}
