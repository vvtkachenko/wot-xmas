import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'randomizer';
  static readonly SERVER_COUNT = 6;
  static readonly ITERATIONS = 1000;

  public serverNames: string[] = ['Барц', 'Зигхард', 'Леона','Эрика'];
  public servers: string[] = [];

  public results = new Map();

  public winner = '';

  constructor () {
    this.run();
  }

  private generateServers() {
    this.servers = [];
    this.serverNames.map((serverName) => {
      for (let index = 1; index <= AppComponent.SERVER_COUNT; index++) {
        this.servers.push(`${serverName} ${index}`);
      }
    })
    console.log(this.servers);
    
  }

  private getRandomServer() {
    const random = Math.floor(Math.random() * this.servers.length);

    return this.servers[random];
  }

  private randomizeServers() {
    for (let index = 0; index < AppComponent.ITERATIONS; index++) {
      const server = this.getRandomServer();
      const count = this.results.get(server) || 0
      this.results.set(server, count + 1);
    }
  }

  private getWinner() {
    return [...this.results.entries()].reduce((a, e ) => e[1] > a[1] ? e : a)[0]
  }

  public run() {
    this.generateServers();
    this.randomizeServers();
    this.winner = this.getWinner();
  }
}
