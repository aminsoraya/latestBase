import styles from "@/styles/inventoryDetails.module.scss";

const Table = (props) => {
  return (
    <div className="row">
      <div className={`col-6 ${styles.row} ${styles.odd}`}>Make</div>
      <div className={`col-6 ${styles.row} ${styles.odd}`}>
        {props?.Vehicle?.make}
      </div>
      <div className={`col-6 ${styles.row} ${styles.even}`}>Model</div>
      <div className={`col-6 ${styles.row} ${styles.even}`}>
        {props?.Vehicle?.model}
      </div>
      <div className={`col-6 ${styles.row} ${styles.odd}`}>Year</div>
      <div className={`col-6 ${styles.row} ${styles.odd}`}>
        {props?.Vehicle?.model_year}
      </div>
      <div className={`col-6 ${styles.row} ${styles.even}`}>Body Style</div>
      <div className={`col-6 ${styles.row} ${styles.even}`}>
        {props?.Vehicle?.BodyStyle?.name}
      </div>
      <div className={`col-6 ${styles.row} ${styles.odd}`}>Odometer</div>
      <div className={`col-6 ${styles.row} ${styles.odd}`}>
        {(props?.Vehicle?.odometer, 2).toLocaleString()}
        {props?.Vehicle?.odometer_type === 1 ? "MI" : "KM"}
      </div>
      <div className={`col-6 ${styles.row} ${styles.even}`}>Transmission</div>
      <div className={`col-6 ${styles.row} ${styles.even}`}>
        {props?.Vehicle?.Transmission?.name}
      </div>
      <div className={`col-6 ${styles.row} ${styles.odd}`}>Engine</div>
      <div className={`col-6 ${styles.row} ${styles.odd}`}>
        {props?.Vehicle?.engine_cylinders}
      </div>
      <div className={`col-6 ${styles.row} ${styles.even}`}>Engine Size</div>
      <div className={`col-6 ${styles.row} ${styles.even}`}>
        {props?.Vehicle?.engine_size}
      </div>
      <div className={`col-6 ${styles.row} ${styles.odd}`}>Driveline</div>
      <div className={`col-6 ${styles.row} ${styles.odd}`}>
        {props?.Vehicle?.drive_type}
      </div>
      <div className={`col-6 ${styles.row} ${styles.even}`}>Exterior Color</div>
      <div className={`col-6 ${styles.row} ${styles.even}`}>
        {props?.Vehicle?.exterior_color?.name}
      </div>
      <div className={`col-6 ${styles.row} ${styles.odd}`}>Interior Color</div>
      <div className={`col-6 ${styles.row} ${styles.odd}`}>
        {props?.Vehicle?.interior_color?.name}
      </div>
      <div className={`col-6 ${styles.row} ${styles.even}`}>Doors</div>
      <div className={`col-6 ${styles.row} ${styles.even}`}>
        {props?.Vehicle?.doors}
      </div>
      <div className={`col-6 ${styles.row} ${styles.odd}`}>Passengers</div>
      <div className={`col-6 ${styles.row} ${styles.odd}`}>
        {props?.Vehicle?.passenger}
      </div>
      <div className={`col-6 ${styles.row} ${styles.even}`}>Fuel Type</div>
      <div className={`col-6 ${styles.row} ${styles.even}`}>
        {props?.Vehicle?.fuel_type}
      </div>
      <div className={`col-6 ${styles.row} ${styles.odd}`}>City Fuel</div>
      <div className={`col-6 ${styles.row} ${styles.odd}`}>
        {props?.Vehicle?.city_fuel}
        {props?.Vehicle?.fuel_unit}
      </div>
      <div className={`col-6 ${styles.row} ${styles.even}`}>Hwy Fuel</div>
      <div className={`col-6 ${styles.row} ${styles.even}`}>
        {props?.Vehicle?.hwy_fuel}
        {props?.Vehicle?.fuel_unit}
      </div>
      <div className={`col-6 ${styles.row} ${styles.odd}`}>Stock Number</div>
      <div className={`col-6 ${styles.row} ${styles.odd}`}>
        {props?.stock_NO}
      </div>
    </div>
  );
};

export default Table;
