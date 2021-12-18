<template>
  <main id="center-wrapper">
    <section class="width-large-desktop container-info">
      <article>
        <h2>Lorem ipsum</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae itaque nesciunt placeat praesentium iste fugit porro perspiciatis explicabo possimus qui voluptatibus non similique culpa optio ex iusto exercitationem inventore, sequi natus. Sed, enim explicabo! Voluptate nemo aliquid incidunt pariatur sint. Doloribus repudiandae modi repellat? Dolores non corporis nesciunt eos nisi ea assumenda perspiciatis accusamus nemo quos dignissimos voluptates praesentium commodi voluptatibus quo, minus velit quidem necessitatibus at? Ab, libero? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum quibusdam molestias mollitia ad quas illum numquam cupiditate eligendi, omnis commodi beatae delectus, sint quisquam nostrum?</p>
      </article>
      <div class="info-responsive">
        <figure>
          <img src="../../public/img/skep-vars/SkepFormalTransparent.png" alt="Ew" aria-label="Ew" />
          <figcaption>This is your fursona? That is cringe bro.</figcaption>
        </figure>
      </div>
    </section>
    <section class="width-large-desktop container-info">
      <div class="info-responsive">
        <figure>
          <img
            style="border-radius: 10px; border: 2px solid red;"
            
            alt="Ew"
            aria-label="Ew"
          />
          <figcaption>Example of a big failure</figcaption>
        </figure>
      </div>
      <article>
        <h2>asdasd</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam amet dolore illum hic, nam consequuntur porro vel debitis laborum praesentium.</p>
        <p>Consequuntur rerum amet sint commodi. Pariatur doloribus rerum voluptates enim, illo maxime eveniet deleniti exercitationem magni beatae, neque, in incidunt!</p>
        <p>Doloribus dolor eaque labore, unde inventore odio possimus repellat ipsa velit optio consectetur necessitatibus, molestias quo reprehenderit doloremque eius expedita!</p>
        <p>Molestias neque unde ut optio sapiente distinctio obcaecati fugiat quasi consequuntur at, animi tempore mollitia eum sequi. Qui, perferendis dolor.</p>
      </article>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.container-info {
  @include flexy();

  @include md-tablet-devices {
    @include flexy(center, center, column);

    article {
      text-align: center;
    }
  }

  // border: 2px dashed white;
  margin: 0 1rem;
  padding: 0.45rem;

  img {
    // @include prop-transition(width, 200ms);
    width: 200px;

    @include md-tablet-devices {
      width: 300px;
    }
  }
}

.info-responsive {
  @include flexy(center, center, column);
  // @include prop-transition(padding, 200ms);

  @include md-desktop-devices {
    padding: 1.25rem;
  }
  padding: 0 1rem;

  @include md-tablet-devices {
    padding: 1rem;
  }
}
</style>