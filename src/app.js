function importAll(resolve) {
  resolve.keys().forEach(resolve);
}

importAll(require.context('../src', true, /\.(scss|css|svg|png|ico|xml)$/));
