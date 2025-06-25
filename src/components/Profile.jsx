import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProfileContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 40px auto 0 auto;
  padding: 20px;
  box-sizing: border-box;
  background: #f5f6fa;
  min-height: 100vh;
`;

const ProfileHeader = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;
`;

const ProfileAvatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  color: #666;
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const ProfileName = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

const ProfileEmail = styled.div`
  color: #666;
  margin-bottom: 5px;
`;

const ProfilePhone = styled.div`
  color: #666;
`;

const EditProfileBtn = styled.button`
  background: #00233d;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    background: #003d6b;
  }
`;

const ProfileStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 20px;
  width: 100%;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
`;

const StatNumber = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #1976d2;
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  color: #666;
  font-size: 0.9em;
`;

const ProfileSections = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
`;

const ProfileSection = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
  & i {
    color: #1976d2;
  }
`;

const ReservationItem = styled.div`
  border-bottom: 1px solid #eee;
  padding: 15px 0;
  &:last-child {
    border-bottom: none;
  }
`;

const ReservationFlight = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const ReservationDates = styled.div`
  color: #666;
  font-size: 0.9em;
`;

const ReservationStatus = styled.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 15px;
  font-size: 0.8em;
  margin-top: 5px;
  background: ${({ status }) =>
    status === "active"
      ? "#e3f2fd"
      : status === "completed"
      ? "#e8f5e9"
      : status === "cancelled"
      ? "#ffebee"
      : "#eee"};
  color: ${({ status }) =>
    status === "active"
      ? "#1976d2"
      : status === "completed"
      ? "#2e7d32"
      : status === "cancelled"
      ? "#c62828"
      : "#666"};
`;

const ProfileMainContent = styled.div`
  width: 100vw;
  max-width: 1200px;
  min-width: 320px;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const PasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin-right: 16px;
  min-width: 220px;
`;
const PasswordInput = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;
const PasswordActions = styled.div`
  display: flex;
  gap: 8px;
`;
const PasswordButton = styled.button`
  background: #00233d;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
  &:hover {
    background: #003d6b;
  }
`;
const PasswordCancel = styled.button`
  background: #eee;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
`;

const PaymentBox = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin-right: 16px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const PaymentTitle = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;
const PaymentInput = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;
const PaymentActions = styled.div`
  display: flex;
  gap: 8px;
`;
const PaymentButton = styled.button`
  background: #00233d;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
  &:hover {
    background: #003d6b;
  }
`;
const PaymentCancel = styled.button`
  background: #eee;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
`;

const NotificationBox = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin-right: 16px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const NotificationTitle = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;
const NotificationOption = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
`;
const NotificationCheckbox = styled.input`
  accent-color: #1976d2;
`;
const NotificationActions = styled.div`
  display: flex;
  gap: 8px;
`;
const NotificationButton = styled.button`
  background: #00233d;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
  &:hover {
    background: #003d6b;
  }
`;
const NotificationCancel = styled.button`
  background: #eee;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
`;

const SuccessMsg = styled.div`
  color: #fff;
  background: #43a047;
  padding: 4px 16px;
  border-radius: 6px;
  font-size: 14px;
  margin-right: 12px;
  display: inline-block;
`;

const LinkedAccountsBox = styled.div`
  background: #f7f9fb;
  border-radius: 12px;
  padding: 24px 18px;
  margin-top: 32px;
`;
const LinkedAccountsTitle = styled.div`
  font-weight: bold;
  font-size: 1.15em;
  color: #222;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
`;
const LinkedAccountsRowFlex = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  margin-bottom: 0;
`;
const LinkedAccountCol = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
  padding: 18px 24px 14px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 140px;
`;
const LinkedAccountName = styled.span`
  font-size: 1.08em;
  font-weight: 500;
  color: #222;
`;
const LinkedAccountBtn = styled.button`
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 7px 28px;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #1251a3;
  }
`;
const LinkedAccountUnlink = styled.button`
  background: none;
  color: #1976d2;
  border: none;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
  padding: 0 8px;
`;

const Profile = () => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPaymentBox, setShowPaymentBox] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const [showNotificationBox, setShowNotificationBox] = useState(false);
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const [pushNotif, setPushNotif] = useState(true);

  const [notifSaved, setNotifSaved] = useState(false);
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [paymentSaved, setPaymentSaved] = useState(false);

  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotError, setForgotError] = useState("");
  const [forgotMsg, setForgotMsg] = useState("");

  const [avatar, setAvatar] = useState(localStorage.getItem("avatar") || "");
  const [pendingAvatar, setPendingAvatar] = useState(null);

  // User data state
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Reservations state
  const [reservations, setReservations] = useState([]);
  const [reservationsLoading, setReservationsLoading] = useState(true);
  const [reservationsError, setReservationsError] = useState(null);

  // Fetch user data from API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError(null);

        const token = localStorage.getItem("token");
        if (!token) {
          setError("No authentication token found");
          setLoading(false);
          return;
        }

        const response = await fetch(
          "https://tickifywebsite.runasp.net/me/info",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          if (response.status === 401) {
            setError("Authentication failed. Please login again.");
            // Optionally redirect to login or clear localStorage
            localStorage.removeItem("token");
            localStorage.removeItem("isLoggedIn");
          } else {
            setError(`Failed to fetch user data: ${response.status}`);
          }
          setLoading(false);
          return;
        }

        const data = await response.json();
        setUserData(data);

        // Update localStorage with fetched data
        localStorage.setItem("firstName", data.firstName || "");
        localStorage.setItem("lastName", data.lastName || "");
        localStorage.setItem("email", data.email || "");
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Failed to fetch user data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Fetch reservations from API
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        setReservationsLoading(true);
        setReservationsError(null);

        const token = localStorage.getItem("token");
        if (!token) {
          setReservationsError("No authentication token found");
          setReservationsLoading(false);
          return;
        }

        const response = await fetch(
          "https://tickifywebsite.runasp.net/me/my-reservations",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          if (response.status === 401) {
            setReservationsError("Authentication failed. Please login again.");
          } else {
            setReservationsError(
              `Failed to fetch reservations: ${response.status}`
            );
          }
          setReservationsLoading(false);
          return;
        }

        const data = await response.json();
        setReservations(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching reservations:", err);
        setReservationsError("Failed to fetch reservations. Please try again.");
      } finally {
        setReservationsLoading(false);
      }
    };

    fetchReservations();
  }, []);

  // Helper function to format date
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("ar-EG", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (error) {
      return dateString;
    }
  };

  // Helper function to get airport name without the number
  const getAirportName = (airportString) => {
    if (!airportString) return "";
    // Remove the number at the end (e.g., "Adnan Menderes Airport 11" -> "Adnan Menderes Airport")
    return airportString.replace(/\s+\d+$/, "");
  };

  // Use API data if available, fallback to localStorage
  const firstName =
    userData?.firstName || localStorage.getItem("firstName") || "";
  const lastName = userData?.lastName || localStorage.getItem("lastName") || "";
  const emailLS = userData?.email || localStorage.getItem("email") || "";
  const phoneLS = localStorage.getItem("phone") || "";
  const fullName =
    firstName && lastName
      ? `${firstName} ${lastName}`
      : localStorage.getItem("fullName") || "اسم المستخدم";

  const [editMode, setEditMode] = useState(false);
  const [editName, setEditName] = useState(fullName);
  const [editEmail, setEditEmail] = useState(emailLS);
  const [editPhone, setEditPhone] = useState(phoneLS);
  const [saveMsg, setSaveMsg] = useState("");

  const [linkedGoogle, setLinkedGoogle] = useState(false);
  const [linkedFacebook, setLinkedFacebook] = useState(false);
  const [linkedTwitter, setLinkedTwitter] = useState(false);

  const handlePasswordClick = (e) => {
    e.preventDefault();
    setShowPasswordForm((prev) => !prev);
  };
  const handlePasswordSave = (e) => {
    e.preventDefault();
    setPasswordSaved(true);
    setShowPasswordForm(false);
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setTimeout(() => setPasswordSaved(false), 2000);
  };
  const handlePasswordCancel = (e) => {
    e.preventDefault();
    setShowPasswordForm(false);
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handlePaymentClick = (e) => {
    e.preventDefault();
    setShowPaymentBox((prev) => !prev);
  };
  const handlePaymentSave = (e) => {
    e.preventDefault();
    setPaymentSaved(true);
    setShowPaymentBox(false);
    setCardNumber("");
    setCardName("");
    setExpiry("");
    setCvv("");
    setTimeout(() => setPaymentSaved(false), 2000);
  };
  const handlePaymentCancel = (e) => {
    e.preventDefault();
    setShowPaymentBox(false);
    setCardNumber("");
    setCardName("");
    setExpiry("");
    setCvv("");
  };

  const handleNotificationClick = (e) => {
    e.preventDefault();
    setShowNotificationBox((prev) => !prev);
  };
  const handleNotificationSave = (e) => {
    e.preventDefault();
    setNotifSaved(true);
    setShowNotificationBox(false);
    setTimeout(() => setNotifSaved(false), 2000);
  };
  const handleNotificationCancel = (e) => {
    e.preventDefault();
    setShowNotificationBox(false);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPendingAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ProfileMainContent>
      <ProfileContainer>
        <ProfileHeader>
          <ProfileAvatar style={{ position: "relative", overflow: "hidden" }}>
            {pendingAvatar ? (
              <img
                src={pendingAvatar}
                alt="pending-avatar"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                  opacity: 0.8,
                  border: "2px dashed #1976d2",
                }}
              />
            ) : avatar ? (
              <img
                src={avatar}
                alt="avatar"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            ) : (
              <i className="fas fa-user"></i>
            )}
            {editMode && (
              <>
                <label
                  htmlFor="avatar-upload"
                  style={{
                    position: "absolute",
                    bottom: 8,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#fff",
                    borderRadius: "50%",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    padding: 6,
                    cursor: "pointer",
                    border: "1px solid #ccc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 36,
                    height: 36,
                    zIndex: 2,
                  }}
                  title="تغيير الصورة"
                >
                  <i
                    className="fas fa-camera"
                    style={{ color: "#1976d2", fontSize: 18 }}
                  ></i>
                  <input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    style={{ display: "none" }}
                  />
                </label>
                {(avatar || pendingAvatar) && (
                  <button
                    onClick={() => {
                      setPendingAvatar(null);
                      setAvatar("");
                      localStorage.removeItem("avatar");
                    }}
                    style={{
                      position: "absolute",
                      top: 8,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#fff",
                      borderRadius: "50%",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                      border: "1px solid #ccc",
                      width: 32,
                      height: 32,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      zIndex: 2,
                    }}
                    title="حذف الصورة"
                  >
                    <i
                      className="fas fa-trash"
                      style={{ color: "#c62828", fontSize: 16 }}
                    ></i>
                  </button>
                )}
              </>
            )}
          </ProfileAvatar>
          <ProfileInfo>
            {loading ? (
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <i
                  className="fas fa-spinner fa-spin"
                  style={{ color: "#1976d2" }}
                ></i>
                <span style={{ color: "#666" }}>جاري تحميل البيانات...</span>
              </div>
            ) : error ? (
              <div
                style={{
                  color: "#c62828",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <i className="fas fa-exclamation-triangle"></i>
                <span>{error}</span>
                <button
                  onClick={() => window.location.reload()}
                  style={{
                    background: "#1976d2",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    padding: "4px 8px",
                    fontSize: "12px",
                    cursor: "pointer",
                    marginLeft: "10px",
                  }}
                >
                  إعادة المحاولة
                </button>
              </div>
            ) : editMode ? (
              <>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  style={{
                    fontSize: 20,
                    marginBottom: 8,
                    padding: 8,
                    borderRadius: 6,
                    border: "1px solid #ccc",
                    width: "100%",
                  }}
                  placeholder="الاسم الكامل"
                />
                <div style={{ display: "flex", gap: 10 }}>
                  <input
                    type="email"
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                    style={{
                      fontSize: 16,
                      marginBottom: 8,
                      padding: 8,
                      borderRadius: 6,
                      border: "1px solid #ccc",
                      flex: 1,
                    }}
                    placeholder="البريد الإلكتروني"
                  />
                  <input
                    type="tel"
                    value={editPhone}
                    onChange={(e) => setEditPhone(e.target.value)}
                    style={{
                      fontSize: 16,
                      marginBottom: 8,
                      padding: 8,
                      borderRadius: 6,
                      border: "1px solid #ccc",
                      flex: 1,
                    }}
                    placeholder="رقم الهاتف"
                  />
                </div>
                <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                  <button
                    style={{
                      background: "#00233d",
                      color: "#fff",
                      border: "none",
                      borderRadius: 5,
                      padding: "6px 16px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      localStorage.setItem("fullName", editName);
                      localStorage.setItem("email", editEmail);
                      localStorage.setItem("phone", editPhone);
                      if (pendingAvatar) {
                        setAvatar(pendingAvatar);
                        localStorage.setItem("avatar", pendingAvatar);
                        setPendingAvatar(null);
                      }
                      setSaveMsg("تم الحفظ بنجاح");
                      setTimeout(() => setSaveMsg(""), 2000);
                      setEditMode(false);
                    }}
                  >
                    حفظ
                  </button>
                  <button
                    style={{
                      background: "#eee",
                      color: "#333",
                      border: "none",
                      borderRadius: 5,
                      padding: "6px 16px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setEditMode(false);
                      setEditName(fullName);
                      setEditEmail(emailLS);
                      setEditPhone(phoneLS);
                      setPendingAvatar(null);
                    }}
                  >
                    إلغاء
                  </button>
                </div>
                {saveMsg && (
                  <div style={{ color: "green", marginTop: 8 }}>{saveMsg}</div>
                )}
              </>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <ProfileName>{fullName}</ProfileName>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <ProfileEmail>
                    <i className="fas fa-envelope"></i> {emailLS}
                  </ProfileEmail>
                  {phoneLS && (
                    <ProfilePhone>
                      <i className="fas fa-phone"></i> {phoneLS}
                    </ProfilePhone>
                  )}
                </div>
                {userData && (
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#666",
                      marginTop: "4px",
                      padding: "4px 8px",
                      background: "#e8f5e9",
                      borderRadius: "4px",
                      border: "1px solid #c8e6c9",
                    }}
                  >
                    <i className="fas fa-check-circle"></i> البيانات محدثة من
                    الخادم
                  </div>
                )}
              </div>
            )}
          </ProfileInfo>
          {!loading && !error && (
            <EditProfileBtn onClick={() => setEditMode(true)}>
              <i className="fas fa-edit"></i>
              تعديل الملف الشخصي
            </EditProfileBtn>
          )}
        </ProfileHeader>

        <ProfileStats>
          <StatItem>
            <StatNumber>{reservations.length}</StatNumber>
            <StatLabel>إجمالي الحجوزات</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>
              {reservations.filter((r) => r.status === "active").length}
            </StatNumber>
            <StatLabel>حجوزات نشطة</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>
              {reservations.filter((r) => r.status === "completed").length}
            </StatNumber>
            <StatLabel>حجوزات مكتملة</StatLabel>
          </StatItem>
        </ProfileStats>

        <ProfileSections>
          <ProfileSection>
            <SectionTitle>
              <i className="fas fa-plane"></i> الحجوزات
            </SectionTitle>
            {reservationsLoading ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 20,
                }}
              >
                <i
                  className="fas fa-spinner fa-spin"
                  style={{ color: "#1976d2", fontSize: 24 }}
                ></i>
                <span style={{ marginLeft: 10, color: "#666" }}>
                  جاري تحميل الحجوزات...
                </span>
              </div>
            ) : reservationsError ? (
              <div
                style={{
                  color: "#c62828",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 20,
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <i className="fas fa-exclamation-triangle"></i>
                  <span>{reservationsError}</span>
                </div>
                <button
                  onClick={() => window.location.reload()}
                  style={{
                    background: "#1976d2",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    padding: "8px 16px",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  إعادة المحاولة
                </button>
              </div>
            ) : reservations.length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  padding: 40,
                  color: "#666",
                }}
              >
                <i
                  className="fas fa-plane"
                  style={{ fontSize: 48, marginBottom: 16, opacity: 0.5 }}
                ></i>
                <div>لا توجد حجوزات حالياً</div>
              </div>
            ) : (
              <>
                {reservations.map((reservation, index) => (
                  <ReservationItem key={index}>
                    <ReservationFlight>
                      {getAirportName(reservation.departureAirport)} -{" "}
                      {getAirportName(reservation.arrivalAirport)}
                    </ReservationFlight>
                    <ReservationDates>
                      <div style={{ marginBottom: 4 }}>
                        <i
                          className="fas fa-plane-departure"
                          style={{ color: "#1976d2", marginRight: 8 }}
                        ></i>
                        <strong>مغادرة:</strong>{" "}
                        {formatDate(reservation.departureDate)}
                      </div>
                      <div>
                        <i
                          className="fas fa-plane-arrival"
                          style={{ color: "#4caf50", marginRight: 8 }}
                        ></i>
                        <strong>وصول:</strong>{" "}
                        {formatDate(reservation.arrivalDate)}
                      </div>
                    </ReservationDates>
                    <ReservationStatus status="active">نشط</ReservationStatus>
                  </ReservationItem>
                ))}
              </>
            )}
          </ProfileSection>

          <ProfileSection>
            <SectionTitle>
              <i className="fas fa-cog"></i> الإعدادات
            </SectionTitle>
            <ReservationItem
              style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Link
                to="#"
                style={{
                  textDecoration: "none",
                  color: "#333",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
                onClick={handleNotificationClick}
              >
                <i className="fas fa-bell"></i> إعدادات الإشعارات
              </Link>
              {notifSaved && <SuccessMsg>تم الحفظ</SuccessMsg>}
              {showNotificationBox && (
                <NotificationBox>
                  <NotificationTitle>إعدادات الإشعارات</NotificationTitle>
                  <NotificationOption>
                    <NotificationCheckbox
                      type="checkbox"
                      checked={emailNotif}
                      onChange={(e) => setEmailNotif(e.target.checked)}
                    />
                    البريد الإلكتروني
                  </NotificationOption>
                  <NotificationOption>
                    <NotificationCheckbox
                      type="checkbox"
                      checked={smsNotif}
                      onChange={(e) => setSmsNotif(e.target.checked)}
                    />
                    رسائل SMS
                  </NotificationOption>
                  <NotificationOption>
                    <NotificationCheckbox
                      type="checkbox"
                      checked={pushNotif}
                      onChange={(e) => setPushNotif(e.target.checked)}
                    />
                    إشعارات التطبيق
                  </NotificationOption>
                  <NotificationActions>
                    <NotificationButton
                      type="button"
                      onClick={handleNotificationSave}
                    >
                      حفظ
                    </NotificationButton>
                    <NotificationCancel
                      type="button"
                      onClick={handleNotificationCancel}
                    >
                      إلغاء
                    </NotificationCancel>
                  </NotificationActions>
                </NotificationBox>
              )}
            </ReservationItem>
            <ReservationItem
              style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Link
                to="#"
                style={{
                  textDecoration: "none",
                  color: "#333",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
                onClick={handlePasswordClick}
              >
                <i className="fas fa-lock"></i> تغيير كلمة المرور
              </Link>
              {passwordSaved && <SuccessMsg>تم الحفظ</SuccessMsg>}
              {showPasswordForm && (
                <PasswordForm onSubmit={handlePasswordSave}>
                  <PasswordInput
                    type="password"
                    placeholder="كلمة المرور القديمة"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    required
                  />
                  <PasswordInput
                    type="password"
                    placeholder="كلمة المرور الجديدة"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                  <PasswordInput
                    type="password"
                    placeholder="تأكيد كلمة المرور الجديدة"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <PasswordActions>
                    <PasswordButton type="submit">حفظ</PasswordButton>
                    <PasswordCancel
                      type="button"
                      onClick={handlePasswordCancel}
                    >
                      إلغاء
                    </PasswordCancel>
                  </PasswordActions>
                </PasswordForm>
              )}
            </ReservationItem>
            <ReservationItem
              style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Link
                to="#"
                style={{
                  textDecoration: "none",
                  color: "#333",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setShowForgotModal((prev) => !prev);
                }}
              >
                <i className="fas fa-unlock-alt"></i> نسيت كلمة المرور
              </Link>
              {showForgotModal && (
                <div
                  style={{
                    background: "#f8f9fa",
                    borderRadius: 8,
                    padding: 16,
                    marginRight: 16,
                    minWidth: 220,
                  }}
                >
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!forgotEmail) {
                        setForgotError("يرجى إدخال البريد الإلكتروني");
                        setForgotMsg("");
                        return;
                      }
                      setForgotError("");
                      setForgotMsg(
                        "تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني "
                      );
                      setForgotEmail("");
                    }}
                  >
                    <input
                      type="email"
                      placeholder="البريد الإلكتروني"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                      style={{
                        width: "100%",
                        padding: 8,
                        borderRadius: 5,
                        border: forgotError
                          ? "1px solid red"
                          : "1px solid #ccc",
                        marginBottom: 8,
                      }}
                    />
                    {forgotError && (
                      <div
                        style={{
                          color: "red",
                          fontSize: "13px",
                          marginBottom: "8px",
                          textAlign: "end",
                        }}
                      >
                        {forgotError}
                      </div>
                    )}
                    {forgotMsg && (
                      <div
                        style={{
                          color: "green",
                          fontSize: "13px",
                          marginBottom: "8px",
                          textAlign: "end",
                        }}
                      >
                        {forgotMsg}
                      </div>
                    )}
                    <button
                      type="submit"
                      style={{
                        background: "#00233d",
                        color: "#fff",
                        border: "none",
                        borderRadius: 6,
                        padding: "8px 20px",
                        fontSize: "1rem",
                        cursor: "pointer",
                      }}
                    >
                      إرسال
                    </button>
                  </form>
                </div>
              )}
            </ReservationItem>
            <ReservationItem
              style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Link
                to="#"
                style={{
                  textDecoration: "none",
                  color: "#333",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
                onClick={handlePaymentClick}
              >
                <i className="fas fa-credit-card"></i> طرق الدفع
              </Link>
              {paymentSaved && <SuccessMsg>تم الحفظ</SuccessMsg>}
              {showPaymentBox && (
                <PaymentBox>
                  <PaymentTitle>إضافة بطاقة جديدة</PaymentTitle>
                  <PaymentInput
                    type="text"
                    placeholder="رقم البطاقة"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                  />
                  <PaymentInput
                    type="text"
                    placeholder="اسم حامل البطاقة"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    required
                  />
                  <PaymentInput
                    type="text"
                    placeholder="تاريخ الانتهاء (MM/YY)"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    required
                  />
                  <PaymentInput
                    type="text"
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    required
                  />
                  <PaymentActions>
                    <PaymentButton type="button" onClick={handlePaymentSave}>
                      حفظ
                    </PaymentButton>
                    <PaymentCancel type="button" onClick={handlePaymentCancel}>
                      إلغاء
                    </PaymentCancel>
                  </PaymentActions>
                </PaymentBox>
              )}
            </ReservationItem>
          </ProfileSection>
        </ProfileSections>

        <LinkedAccountsBox>
          <LinkedAccountsTitle>الحسابات المرتبطة</LinkedAccountsTitle>
          <LinkedAccountsRowFlex>
            <LinkedAccountCol>
              <i
                className="fab fa-google"
                style={{
                  color: "#EA4335",
                  fontSize: 32,
                  marginBottom: 0,
                  marginleft: 10,
                }}
              ></i>

              {linkedGoogle ? (
                <LinkedAccountUnlink
                  onClick={() => setLinkedGoogle(false)}
                  style={{ marginTop: 10 }}
                >
                  إلغاء الربط
                </LinkedAccountUnlink>
              ) : (
                <LinkedAccountBtn
                  onClick={() => setLinkedGoogle(true)}
                  style={{ marginTop: 10 }}
                >
                  ربط
                </LinkedAccountBtn>
              )}
            </LinkedAccountCol>
            <LinkedAccountCol>
              <i
                className="fab fa-facebook-f"
                style={{
                  color: "#1877F3",
                  fontSize: 32,
                  marginBottom: 0,
                  marginLeft: 10,
                }}
              ></i>

              {linkedFacebook ? (
                <LinkedAccountUnlink
                  onClick={() => setLinkedFacebook(false)}
                  style={{ marginTop: 10 }}
                >
                  إلغاء الربط
                </LinkedAccountUnlink>
              ) : (
                <LinkedAccountBtn
                  onClick={() => setLinkedFacebook(true)}
                  style={{ marginTop: 10 }}
                >
                  ربط
                </LinkedAccountBtn>
              )}
            </LinkedAccountCol>
            <LinkedAccountCol>
              <i
                className="fab fa-x-twitter"
                style={{
                  color: "#000",
                  fontSize: 32,
                  marginBottom: 0,
                  marginLeft: 10,
                }}
              ></i>

              {linkedTwitter ? (
                <LinkedAccountUnlink
                  onClick={() => setLinkedTwitter(false)}
                  style={{ marginTop: 10 }}
                >
                  إلغاء الربط
                </LinkedAccountUnlink>
              ) : (
                <LinkedAccountBtn
                  onClick={() => setLinkedTwitter(true)}
                  style={{ marginTop: 10 }}
                >
                  ربط
                </LinkedAccountBtn>
              )}
            </LinkedAccountCol>
          </LinkedAccountsRowFlex>
        </LinkedAccountsBox>
      </ProfileContainer>
    </ProfileMainContent>
  );
};

export default Profile;
