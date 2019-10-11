package com.intelligent.systems.aifred.controllers;

import com.intelligent.systems.aifred.services.AccessTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("access-token")
public class AccessController {

    @Autowired
    private AccessTokenService accessTokenService;

    @GetMapping
    public String getAccessToken() {
        return accessTokenService.getAccessToken();
    }

}
