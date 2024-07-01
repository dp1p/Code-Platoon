import React from "react";
import "bulma/css/bulma.min.css";

function CardListHonorableMentions() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline is-4">
          {" "}
          {/* Add is-4 for column spacing */}
          {/* First Card */}
          <div className="column is-one-third">
            <div className="card shadow-lg">
              <div className="card-image">
                <figure className="image-honor">
                  <img
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/ddmju9h-915eafc1-bca9-4441-8d33-6f031d5d983a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGRtanU5aC05MTVlYWZjMS1iY2E5LTQ0NDEtOGQzMy02ZjAzMWQ1ZDk4M2EucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bJSelKD0MTexs4nEWyXF004VYKofnBf1meFYuZuuzL0"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="content has-text-grey-light">
                  <h3>Connor lastname</h3>
                  Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at
                  eros. Donec id elit non miy
                </div>
              </div>
            </div>
          </div>
          {/* Second Card */}
          <div className="column is-one-third">
            <div className="card shadow-lg">
              <div className="card-image">
                <figure className="image-honor">
                  <img
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9eded4d6-20b9-40fe-b07e-3b218e21ab4f/dg8v3wx-726eb4b2-ad01-4793-8c4f-771b988b512e.png/v1/fill/w_1280,h_1600,q_80,strp/master_roshi_full_power_mode_by_darkknight1152_dg8v3wx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcLzllZGVkNGQ2LTIwYjktNDBmZS1iMDdlLTNiMjE4ZTIxYWI0ZlwvZGc4djN3eC03MjZlYjRiMi1hZDAxLTQ3OTMtOGM0Zi03NzFiOTg4YjUxMmUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vlkU3T4xVdRxy3gVjcdHCWAlkho-MxD9n8Jn7078ohM"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="content has-text-grey-light">
                  <h3>Adam Cahan</h3>
                  Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at
                  eros. Donec id elit non miy
                </div>
              </div>
            </div>
          </div>
          {/* Third Card */}
          <div className="column is-one-third">
            <div className="card shadow-lg">
              <div className="card-image">
                <figure className="image-honor">
                  <img
                    src="https://weandthecolor.com/wp-content/uploads/2021/06/1-The-Art-of-the-National-Parks-696x860.jpg"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="content has-text-grey-light">
                  <h3>Dummy Text</h3>
                  Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at
                  eros. Donec id elit non miy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardListHonorableMentions;
