
import React from 'react';
import './Team.css'

const TeamComponent = () => {

  const copyText = (text) => {
    let a = navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
    console.log(a);

  };

  return (
    <>
      <header>
        <div className="header-title">Team</div>
        <div className="header-icon"></div>
      </header>

      <main id='main'>
        <div className="team-yq">
          <div className="team-yq-title">
            <div className="yq-title-info">Code</div>
            <div className="yq-title-reward">
              Reward
              <svg
                t="1713162509992"
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="7147"
                width="24"
              >
                <path
                  d="M247.22 814.53a36.46 36.46 0 0 1-25.78-62.24L471.73 512 231.44 271.71A36.46 36.46 0 0 1 283 220.15l246.77 246.73a63.83 63.83 0 0 1 0 90.2L283 803.85a36.35 36.35 0 0 1-25.78 10.68z"
                  fill="#d81e06"
                  p-id="7148"
                ></path>
                <path
                  d="M512 814.53a36.46 36.46 0 0 1-25.78-62.24L726.47 512 486.18 271.71a36.46 36.46 0 0 1 51.56-51.56l246.77 246.73a63.66 63.66 0 0 1 0 90.2L537.75 803.85A36.35 36.35 0 0 1 512 814.53z"
                  fill="#d81e06"
                  p-id="7149"
                ></path>
              </svg>
            </div>
          </div>
          <div className="team-yq-code">
            <div className="yq-code-yqm">329667</div>
            <div className="yq-codd-btn" onClick={() => copyText('329667')}>
              Copy code
            </div>
          </div>
          <div className="team-yq-link">
            <div className="yq-link-title">Link</div>
            <div className="yq-link-cont">
              <span>
                https://heraeusinvest.in/home/login/register/invite_code/329667.html
              </span>
              <div
                className="yq-link-cont-btn"
                onClick={() =>
                  copyText(
                    'https://heraeusinvest.in/home/login/register/invite_code/329667.html'
                  )
                }
              >
                Copy
              </div>
            </div>
          </div>
          <input
            name="webcopyinput"
            id="webcopyinput"
            type="text"
            style={{ left: '-1000px', position: 'absolute' }}
          />
        </div>
        <div className="invite-friends">
          <div className="invite-friends-cont">
            Invite Friends To Complete The First Investment And Get
            <span>₹60.00</span>
            <div className="invBtn">
              <input
                type="button"
                className="btnCNot"
                value="Receive"
                data-val="7"
              />
            </div>
          </div>
        </div>
        <div className="team-level-list">
          <div className="team-level-box team-level-box-11">
            <div className="team-dj">
              <div className="team-dj-title">Team level 1</div>
              <div className="team-dj-cont">
                Commission rate: <span>0%</span>
              </div>
            </div>
            <div className="left">
              <div className="team-box-item">
                "Recharge money: "<span>₹0</span>
              </div>
              <div className="team-box-item team-box-item-p">
                "Total People: "<span>0</span>
              </div>
            </div>
          </div>

          <div className="team-level-box team-level-box-12">
            <div className="team-dj">
              <div className="team-dj-title">Team level 2</div>
              <div className="team-dj-cont">
                Commission rate: <span>0%</span>
              </div>
            </div>
            <div className="left">
              <div className="team-box-item">
                "Recharge money: "<span>₹0</span>
              </div>
              <div className="team-box-item team-box-item-p">
                "Total People: "<span>0</span>
              </div>
            </div>
          </div>

          <div className="team-level-box team-level-box-13">
            <div className="team-dj">
              <div className="team-dj-title">Team level 3</div>
              <div className="team-dj-cont">
                Commission rate: <span>0%</span>
              </div>
            </div>
            <div className="right">
              <div className="team-box-item">
                "Recharge money: "<span>₹0</span>
              </div>
              <div className="team-box-item team-box-item-p">
                "Total People: "<span>0</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TeamComponent;
