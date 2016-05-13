# Max-bot Challenge API

## Introduction
Max Verstappen gained a lot popularity in last year with his appearance in the Formula 1. With his popularity comes a big fan base who is interested in his carreer and his fans are emailing him all kind of questions the whole day.
Max likes the personal touch with his fans and would like to answer his fan, but he has a very busy schedule with preparing for races. Because of this he is very interested in a solution to automatically answering his fan base.

## Challenge
Write a bot who is capable of answering the questions from Max's fans. The answers to the questions can be found by using Max's content REST API 

### Participate
- Expose an endpoint which is accessible using HTTP. (example: http://myawesomemaxbot.com?question=)
- Build your bot to find the answers to questions directed to Max
- Submit your endpoint before ....

### Judgement
- We will ask 10 questions by sending requests to your bot's endpoint.
- We expect that your endpoint is giving the correct answers to these questions within 5 seconds.
- For each correct answer we will give you a point.

## Max API
The Max content API has the endpoints where you can use to harvest the answers.
- News: http://13.94.194.106/news
- Events: http://13.94.194.106/events/2016

## Samples
We will not let you getting started in the dark. We will provide you with some sample questions and an application which you can take as starting point.

### Questions
These are some questions which you can expect.

- What time do you start the qualifying race of the Formula 1 Monaco?  
  _13:00_
- What do you think of the Formula 1 Russia?  
  _Sochi is an interesting track: a circuit with room to overtake. Hopefully we don’t need to but if it’s necessary, there are opportunities._
- For which team do you race?  
  _Scuderia Toro Rosso_
- Which place did you end in China?  
  _8th_

### Application
Take a look at [this bot](https://github.com/exactsoftware/campusparty-maxbot) which already know a couple of questions but without any logic. You can take this application as a start or as reference.
