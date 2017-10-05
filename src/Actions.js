export function syncAction(x) {
  const nextX = !x;
  return {
    type: 'SYNC_ACTION',
    x: nextX
  }
}

function async(y) {
  return new Promise((resolve) => {
    resolve(!y);
  })
}

export async function asyncAction(y) {
  const nextY = await async(y);
  return {
    type: 'ASYNC_ACTION',
    y: nextY
  };
}