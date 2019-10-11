package com.intelligent.systems.aifred.services;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


@Service
public class AccessTokenServiceDefault implements AccessTokenService {


    @Override
    public String getAccessToken() {

        String token = null;

        final HttpHeaders headers = new HttpHeaders();
        headers.add("Ocp-Apim-Subscription-Key", "a6c0610105bd422db5550bec4e487d8a");

        RestTemplate restTemplate = new RestTemplate();
        final HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<Object> responseEntity = restTemplate.exchange("https://api.videoindexer.ai/auth/trial/Accounts/f943b067-d120-4028-8f60-58ff6e6edc5b/AccessToken?allowEdit=true", HttpMethod.GET, entity, Object.class);

        if (responseEntity != null && responseEntity.getBody() != null) {
            token = (String) responseEntity.getBody();
        }
        return token;
    }
}
