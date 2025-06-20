// Mock implementation of VAPI for local development
import { EventEmitter } from 'events';

class MockVapi extends EventEmitter {
  constructor(token: string) {
    super();
    console.log('MockVapi initialized with token:', token ? 'Valid token provided' : 'No token');
  }

  async start(workflowIdOrAssistant: any, options?: any) {
    console.log('MockVapi.start called with:', { workflowIdOrAssistant, options });
    
    // Simulate a successful connection after a short delay
    setTimeout(() => {
      console.log('MockVapi: Simulating call start');
      this.emit('call-start');
      
      // Simulate some messages
      setTimeout(() => {
        const mockMessage = {
          type: 'transcript',
          transcriptType: 'final',
          role: 'assistant',
          transcript: 'Hello! I\'m your AI interviewer. How are you doing today?'
        };
        console.log('MockVapi: Simulating message');
        this.emit('message', mockMessage);
        
        // Simulate speech start/end
        this.emit('speech-start');
        setTimeout(() => {
          this.emit('speech-end');
        }, 3000);
      }, 2000);
    }, 1000);
    
    return Promise.resolve();
  }

  stop() {
    console.log('MockVapi.stop called');
    setTimeout(() => {
      console.log('MockVapi: Simulating call end');
      this.emit('call-end');
    }, 500);
  }

  on(event: string, listener: (...args: any[]) => void): this {
    console.log(`MockVapi: Adding listener for event '${event}'`);
    return super.on(event, listener);
  }

  off(event: string, listener: (...args: any[]) => void): this {
    console.log(`MockVapi: Removing listener for event '${event}'`);
    return super.off(event, listener);
  }
}

export const vapi = new MockVapi(process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN || 'mock-token');
