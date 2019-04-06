export interface Machine {
  id: string;
  name: string;
  imageUrl: string;
  largeImageUrl: string;
  state: {
    live: 'ready' | 'run' | 'stop' | 'unavailable';
    history: ('ready' | 'run' | 'stop' | 'unavailable')[];
    summary: { code: 'ready' | 'run' | 'stop' | 'unavailable'; value: number }[];
  };
}

export class ColorTable {
  static machineCodes = { ready: 'yellow', run: 'green', stop: 'red', unavailable: '#ccc'};
}
