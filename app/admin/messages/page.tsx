'use client';

import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Skeleton } from '../../components/Skeleton';

interface Message {
  _id: string;
  name: string;
  email: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export default function Messages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/admin/messages');
      const data = await response.json();
      if (response.ok) {
        setMessages(data.messages);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/messages/${id}`, {
        method: 'PUT',
      });
      if (response.ok) {
        setMessages(messages.map((m) => (m._id === id ? { ...m, isRead: true } : m)));
      }
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    const result = await Swal.fire({
      title: 'Delete Message?',
      text: `Are you sure you want to delete message from ${name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7c3aed',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`/api/admin/messages/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setMessages(messages.filter((m) => m._id !== id));
          if (selectedMessage?._id === id) {
            setSelectedMessage(null);
          }
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'Message has been removed.',
            confirmButtonColor: '#7c3aed',
          });
        }
      } catch (error) {
        console.error('Error deleting message:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to delete message.',
          confirmButtonColor: '#7c3aed',
        });
      }
    }
  };

  const viewMessage = (message: Message) => {
    setSelectedMessage(message);
    if (!message.isRead) {
      markAsRead(message._id);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const unreadCount = messages.filter((m) => !m.isRead).length;

  if (loading) {
    return (
      <div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <Skeleton className="h-8 w-32 mb-2" />
            <Skeleton className="h-5 w-64" />
          </div>
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-24 rounded-lg" />
            <Skeleton className="h-10 w-24 rounded-lg" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <Skeleton className="h-5 w-16" />
            </div>
            <div className="divide-y divide-gray-200">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                  <Skeleton className="h-3 w-40 mb-1" />
                  <Skeleton className="h-3 w-full" />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-8">
            <div className="text-center">
              <Skeleton className="h-16 w-16 rounded-xl mx-auto mb-4" />
              <Skeleton className="h-5 w-48 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600">View and respond to contact messages</p>
        </div>
        <div className="flex items-center gap-3">
          {unreadCount > 0 && (
            <div className="bg-red-100 text-red-600 px-4 py-2 rounded-lg font-semibold">
              {unreadCount} Unread
            </div>
          )}
          <div className="bg-purple-100 text-purple-600 px-4 py-2 rounded-lg font-semibold">
            Total: {messages.length}
          </div>
        </div>
      </div>

      {messages.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <p className="text-gray-500 text-lg">No messages yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Messages List */}
          <div className="lg:col-span-1 bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">Inbox</h3>
            </div>
            <div className="divide-y divide-gray-200 max-h-150 overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message._id}
                  onClick={() => viewMessage(message)}
                  className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                    selectedMessage?._id === message._id ? 'bg-purple-50 border-l-4 border-purple-600' : ''
                  } ${!message.isRead ? 'bg-blue-50' : ''}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {!message.isRead && (
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      )}
                      <span className={`font-medium ${!message.isRead ? 'text-gray-900' : 'text-gray-700'}`}>
                        {message.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {new Date(message.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">{message.email}</p>
                  <p className="text-sm text-gray-600 truncate mt-1">{message.message}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Message Detail */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 overflow-hidden">
            {selectedMessage ? (
              <div className="h-full flex flex-col">
                <div className="p-6 bg-gray-50 border-b border-gray-200">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{selectedMessage.name}</h3>
                      <p className="text-gray-600">{selectedMessage.email}</p>
                      <p className="text-sm text-gray-500 mt-1">{formatDate(selectedMessage.createdAt)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={`mailto:${selectedMessage.email}?subject=Re: Your message&body=%0A%0A---%0AIn reply to your message:%0A${encodeURIComponent(selectedMessage.message)}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                        </svg>
                        Reply
                      </a>
                      <button
                        onClick={() => handleDelete(selectedMessage._id, selectedMessage.name)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 whitespace-pre-wrap">{selectedMessage.message}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center py-20">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-500">Select a message to view</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}