# Building a Real-time Collaborative Editor

When I started this project, I thought WebSockets were just "sockets but for the web." I was wrong. Very wrong.

## The Problem

Google Docs makes real-time collaboration look effortless. Multiple users typing simultaneously, cursors flying around, zero conflicts. Behind that simplicity lies some of the most complex distributed systems engineering I've ever encountered.

## CRDTs vs Operational Transform

I spent two weeks going down the OT (Operational Transform) rabbit hole before discovering **CRDTs** (Conflict-free Replicated Data Types). For my use case—a document editor—Yjs provided a battle-tested implementation that just worked.

```javascript
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';

const ydoc = new Y.Doc();
const provider = new WebsocketProvider(
  'ws://localhost:1234', 
  'room-name', 
  ydoc
);
const ytext = ydoc.getText('monaco');