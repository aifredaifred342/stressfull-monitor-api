package com.intelligent.systems.aifred;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.RequestScope;

import javax.servlet.http.HttpServletRequest;
import java.util.Optional;

@Service
@RequestScope
public class RequestContext {

  @Autowired
  private HttpServletRequest request;

  public Optional<String> getParameter(String attribute) {
    return Optional.ofNullable(request.getParameter(attribute));
  }

  public Optional<String> getHeader(String attribute) {
    return Optional.ofNullable(request.getHeader(attribute));
  }
}
