(function() {
    console.log('cokiee', document?.cookie);
    console.log('jwt', window?.localStorage.getItem('userInfo') || '');
})();
