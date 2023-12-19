import Button from "@/components/shared/button";
import DynamicDropdown, {
  DropDownType,
} from "@/components/shared/dynamicDropdown";
import Input from "@/components/shared/input";
import TextArea from "@/components/shared/textArea";
import Vehicle from "@/components/shared/vehicle";

const PersonalInformationForm = () => {
  return (
    <form action="">
      <div className="row">
        <div className="col-6 mt-2">
          <Input placeholder="First Name" className="input-trasparent" />
        </div>
        <div className="col-6 mt-2">
          <Input placeholder="Last Name" className="input-trasparent" />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Email"
            type="email"
            className="input-trasparent"
          />
        </div>
        <div className="col-6 mt-2">
          <Input placeholder="Phone" type="tel" className="input-trasparent" />
        </div>
        <div className="col-12 pt-2 pb-2">
          <h2>Vehicle Information</h2>
        </div>
        <div className="col-6 mt-2">
          <Input placeholder="Vin" className="input-trasparent" />
        </div>
        <div className="col-6 mt-2">
          <Input placeholder="Year" className="input-trasparent" />
        </div>
        <div className="col-6 mt-2">
          <Input placeholder="Make" type="email" className="input-trasparent" />
        </div>
        <div className="col-6 mt-2">
          <Input placeholder="Model" type="tel" className="input-trasparent" />
        </div>
        <div className="col-6 mt-2">
          <Input placeholder="Trim" type="email" className="input-trasparent" />
        </div>
        <div className="col-6 mt-2">
          <DynamicDropdown
            placeholder="Body Style"
            type={DropDownType.bodyStyle}
          />
        </div>
        <div className="col-6 mt-2">
          <DynamicDropdown
            placeholder="Transmission"
            type={DropDownType.transmission}
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Drive Train"
            type="tel"
            className="input-trasparent"
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Odometer"
            type="email"
            className="input-trasparent"
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Exterior Color"
            type="tel"
            className="input-trasparent"
          />
        </div>
        <div className="col-6 mt-2">
          <Input
            placeholder="Interior Color"
            type="tel"
            className="input-trasparent"
          />
        </div>
        <div className="col-6 mt-2">
          <Vehicle isTransparent={true} />
        </div>
        <div className="col-12 mt-2">
          <TextArea
            placeholder="Additional Info"
            className="input-trasparent pr-2"
          />
        </div>
        <div className="col-6 mt-2" style={{ height: "40px" }}>
          <Button>Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default PersonalInformationForm;
