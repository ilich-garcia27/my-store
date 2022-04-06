import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Ilich';
  age = 23;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;
  names: string[] = ['Saraí', 'Fabrizzio', 'Ilich'];
  newName!: string;
  imgWidth = 10;
  box = {
    width: 100,
    height: 100,
    background: 'red'
  }

  products: Product[] = [
    {
      name: 'The best toy',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Almost brand new bike',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Albums collection',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'My books',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Dog\'s house',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Glasses',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  person = {
    name: 'Ilich',
    age: 23,
    avatar: 'https://source.unsplash.com/random'
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age++;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
