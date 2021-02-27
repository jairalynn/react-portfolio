import React from 'react';
import Nav from '../components/Nav';
import './App.css';

function Contact() {
    <div class="containerr">
        <form>
            <h2>Contact</h2>
            <div class="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Hi, what's your name?" />
            </div>
            <div class="form-group">
                <div class="container-2"></div>
              <label for="exampleFormControlInput2">Email</label>
              <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="example@email.com" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <input type="submit" value="Submit" id="inputcolor" />
          </form>
        </div>

}

export default Contact;