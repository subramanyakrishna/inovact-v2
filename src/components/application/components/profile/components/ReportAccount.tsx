function ReportAccount(props: any) {
    const justBlockUser = ()=>{
        props.closeModal();
        props.showBlockUser();

    }
    return (
      <div className="report-account">
        <button className="close-modal" onClick={props.closeModal}>&times;</button>
        <div className="report-account-content">
          <p className="report-account-content-heading">
            Why are you reporting this account?
          </p>
          <div className="report-account-content-reasons">
            <div>
              <input type="checkbox" style={{ backgroundColor: "#02bd63" }} />
              <span>Its a spam.</span>
            </div>
            <div>
              <input type="checkbox" style={{ backgroundColor: "#02bd63" }} />
              <span>Its inappropriate.</span>
            </div>
            <div>
              <input type="checkbox" style={{ backgroundColor: "#02bd63" }} />
              <span>Some Reason.</span>
            </div>
            <div>
              <input type="checkbox" style={{ backgroundColor: "#02bd63" }} />
              <span>Some Reason.</span>
            </div>
            <div>
              <input type="checkbox" style={{ backgroundColor: "#02bd63" }} />
              <span>Some Reason.</span>
            </div>
            <div>
              <input type="checkbox" style={{ backgroundColor: "#02bd63" }} />
              <span>Some Reason.</span>
            </div>
          </div>
          <div className="report-account-bottom">
            <span className="report-account-bottom-just-block" onClick={justBlockUser}>
              Just Block Instead
            </span>
            <button className="confirm-action-btn">Confirm Action</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ReportAccount;
  