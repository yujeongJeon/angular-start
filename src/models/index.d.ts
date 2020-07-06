interface IndexedObject<T=any>{
  [key: string]: T;
}

interface IndexedArray<T=any>{
  [key: number]: T;
}

type NotSpecified = any;