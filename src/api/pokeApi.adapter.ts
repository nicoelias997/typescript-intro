// El termino adapter adaptara una clase de terceros para usarlo aqui
import axios from "axios";

export interface HttpAdapter {
  get<T>( url: string ):Promise<T>;
}

export class PokeApiPatchAdapter implements HttpAdapter {
  async get<T>(url: string):Promise<T> {

    const res = await fetch(url);
    const data = await res.json();

    return data;
  }
}
export class PokeApiAdapter implements HttpAdapter {

  private readonly axios = axios;
  async get <T> (url: string): Promise<T> {
    
    const { data } = await this.axios.get<T>(url)
    return data;
  }

  // async post (url: string, data: any) {
  //   const { data } = await this.axios.post(url, data)
  //   return;
  // }

  // async put (url: string, data: any) {
  //   return;
  // }

  // async patch (url: string, data: any) {
  //   return;
  // }
  
  // async delete (url: string) {
  //   return;
  // }
}
