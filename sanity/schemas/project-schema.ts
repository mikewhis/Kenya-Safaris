    // schemas/pet.js
    const project = {
        name: 'Tours',
        type: 'document',
        title: 'tours',
        fields: [
          {
            name: 'Tours',
            type: 'string',
            title: 'Tour Title',
          },
           
          {
          name: 'slug',
          type: 'string',
          title: 'slug of the tour',
          options: { source: 'name' }
      
          },
          {
            name: 'image',
            type: 'image',
            title: 'image title',
            options: { hotspot: true }
          },
          {
            name: 'description',
            type: 'text',
            title: 'description Title'
          },
          
        //   {
        //     name: 'itinerary',
        //     type: 'array',
        //     title: 'Itinerary Title',
        //     // Of:[
        //     //   {
        //     //       type:'block'
        //     //   }
        //     // ]
        //   }
      
        ]
      }
      
      export default project;