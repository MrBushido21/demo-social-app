import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
      const component = create(<ProfileStatus status="mrBushido21" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("mrBushido21");
    });

    test("after creation shod be span", () => {
      const component = create(<ProfileStatus status="mrBushido21" />);
      const root = component.root;
      let span = root.findAllByType("span");
      expect(span).not.toBeNull();
    });

    test("input should be displayed in editMode", () => {
      const component = create(<ProfileStatus status="mrBushido21" />);
      const root = component.root;
      let span = root.findByType("span");
      span.props.onDoubleClick()
      let input = root.findByType("input");
      expect(input.props.value).toBe('mrBushido21');
    });
  });