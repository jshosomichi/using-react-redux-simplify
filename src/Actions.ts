interface SyncAction {
  type: 'SYNC_ACTION',
  x: boolean
}

interface AsyncAction {
  type: 'ASYNC_ACTION',
  y: boolean
}

export function syncAction(x: boolean): SyncAction {
  const nextX: boolean = !x;
  return {
    type: 'SYNC_ACTION',
    x: nextX
  }
}

function async(y: boolean): Promise<boolean> {
  return new Promise((resolve) => {
    resolve(!y);
  })
}

export async function asyncAction(y: boolean): Promise<AsyncAction> {
  const nextY: boolean = await async(y);
  return {
    type: 'ASYNC_ACTION',
    y: nextY
  };
}