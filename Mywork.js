function showWebsite(idToShow) {
    const websiteIds = ['website1', 'website2', 'website3'];
    
    websiteIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        if (id === idToShow) {
          element.classList.remove('hidden');
        } else {
          element.classList.add('hidden');
        }
      }
    });
  }
