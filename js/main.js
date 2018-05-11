$(document).ready(function(){
 flag=0;
 $("#image-1").click(function(){
  $("#bigImage").fadeIn();
  $("#bigImage img").attr('src','img/1.jpg');
  flag=1;
 });
    
 $("#image-2").click(function(){
  $("#bigImage").fadeIn();
  $("#bigImage img").attr('src','img/2.jpg')
  flag=2;
 });
    
 $("#image-3").click(function(){
  $("#bigImage").fadeIn();
  $("#bigImage img").attr('src','img/3.jpg')
  flag=3;
 });
    
 $("#image-4").click(function(){
  $("#bigImage").fadeIn();
  $("#bigImage img").attr('src','img/4.jpg')
  flag=4;
 });
    
 $("#image-5").click(function(){
  $("#bigImage").fadeIn();
  $("#bigImage img").attr('src','img/5.jpg')
  flag=5;
 });

 $("#image-6").click(function(){
  $("#bigImage").fadeIn();
  $("#bigImage img").attr('src','img/6.jpg')
  flag=6;
 });
    
 $("#close").click(function(){
  $("#bigImage").fadeOut();
 });
    
 $("#next").click(function(){
  if(flag==1)
  {
    $("#bigImage img").attr('src', 'img/2.jpg');
    flag=2;
  }
  else if(flag==2)
  {
    $("#bigImage img").attr('src', 'img/3.jpg');
    flag=3;
  }
  else if(flag==3)
  {
    $("#bigImage img").attr('src', 'img/4.jpg');
    flag=4;
  }
  else if(flag==4)
  {
    $("#bigImage img").attr('src', 'img/5.jpg');
    flag=5;
  }
  else if(flag==5)
  {
    $("#bigImage img").attr('src', 'img/6.jpg');
    flag=6;
  }
  else if(flag==6)
  {
    $("#bigImage img").attr('src', 'img/1.jpg');
    flag=1;
  }
 });
 $("#pre").click(function(){
  if(flag==1)
  {
    $("#bigImage img").attr('src', 'img/6.jpg');
    flag=6;
  }
  else if(flag==2)
  {
    $("#bigImage img").attr('src', 'img/1.jpg');
    flag=1;
  }
  else if(flag==3)
  {
    $("#bigImage img").attr('src', 'img/2.jpg');
    flag=2;
  } 
  else if(flag==4)
  {
    $("#bigImage img").attr('src', 'img/3.jpg');
    flag=3;
  }
  else if(flag==5)
  {
    $("#bigImage img").attr('src', 'img/4.jpg');
    flag=4;
  }
  else if(flag==6)
  {
    $("#bigImage img").attr('src', 'img/5.jpg');
    flag=5;
  }
 });
});
































