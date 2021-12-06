import React from "react";

function Agreement() {
  return (
    <>
      <div className="container py-2 border agreement-statement">
        <div className="overflow-auto">
          <p className=" p-2" style={{ color: "gray" }}>
            Lorem ipsum dolor sit amet consectetur adipisici ng elit. Quia,
            dicta illum repellat assumenda sunt rem omnis quod voluptates nisi
            animi nam accusam us error laboriosam, alias qui suscipit aut nemo
            corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Non dolores ab, sequi ea, nulla qui, quia nostrum dolorem illum
            quidem laborum! Culpa molestias corporis consequa tur saepe quae
            tempora cumque consectetur eveniet doloribus illum, dolore na tus
            veniam omnis doloremque. Dolor laboriosam nemo nam, deleniti
            recusandae i mpedit aliquid voluptas perspiciatis, natus pariatur
            provident! Exercitatione m dolorem eaque quasi dicta consequuntur
          </p>
        </div>
        <div className="row d-flex flex-row-reverse">
          <div className="col-lg-1 col-xl-1 col-sm-3 col-md-2 col-3 text-end">
            <button type="button " className="btn btn-secondary btn-sm">
              Agreed
            </button>
          </div>
          <div className="col-lg-1 col-xl-1 col-sm-9 col-md-2 col-6 text-end">
            <button type="button " className="btn btn-secondary btn-sm">
              Decline
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Agreement;
