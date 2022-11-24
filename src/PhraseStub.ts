import { Phrase } from "./phrase";

export class PhraseStub extends Phrase{
  constructor(phrase:string){
    super(phrase);
  }
  unique(): string[] {
    return ["123456"];
  }

}